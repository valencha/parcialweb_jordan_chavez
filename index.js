

/////PARCIAL ISABELLA JORDAN Y VALENTINA CHAVEZ

var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));
var contadorUno=0;

var fs = require ('fs');
var f=new Date();
cad=f.getHours(); 

var visitas = {
    general: [],
    registro: []
  };

  fs.readFile(__dirname + "/visitas.txt", (err, data) => {
    if (err) {
      console.log("No hay archivo");
    } else {
      visitas = JSON.parse(data);
      console.log("Si hay archivo");
    }
  });


app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


function registrarVisita(url) {
    let f = new Date();
    if (visitas.general.length > 0) {
      let encontro = false;
  
      visitas.general.forEach((temp, index) => {
        if (temp.url == url) {
            temp.visitas++;
          let v = temp.visitas;
          encontro = true;
  
          let contenido = {
            url: url,
            visitas: v,
            fecha: f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear(),
            hora: f.getHours() + ":" + f.getMinutes()
          };
  
          visitas.registro.push(contenido);
        }
      });
  
      if (encontro == false) {
        let contenido = {
          url: url,
          visitas: 1,
          fecha: f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear(),
          hora: f.getHours() + ":" + f.getMinutes()
        };
        visitas.general.push(contenido);
        visitas.registro.push(contenido);
      }
    } else {
      let contenido = {
        url: url,
        visitas: 1,
        fecha: f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear(),
        hora: f.getHours() + ":" + f.getMinutes()
      };
      visitas.general.push(contenido);
      visitas.registro.push(contenido);
    }
    fs.writeFile("visitas.txt", JSON.stringify(visitas), "utf8", function() {});
  }


app.get('/', function(request, response){   
   
    var contexto = {
        titulo: 'Make up',
        descripcion:'Try this new  brand of makeup, you won’t be dissapointed',
        fondo:'/images/makeup.png',
        layout:false,
        

    }
    registrarVisita("inicio");
    response.render('home', contexto);
});
app.get('/admin', function(request, response){   
   
    var contexto = {
        titulo: 'Admin',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        fondo:'/images/makeup.png',
        layout:false,
        visitas: visitas 

    }
    response.render('admin', contexto);
});

app.get('/face', function(request, response){   
  

    var contexto = {
        titulo: 'Powder',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        fondo:'/images/fondomake.png',
        imagen: '/images/polvos.png',
        layout:false

    }
    registrarVisita("face");
    response.render('face', contexto);
});


app.get('/lips', function(request, response){   
    
    var contexto = {
        titulo: 'Lip Gloss',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        fondo:'/images/fondomake.png',
        imagen: '/images/lips.png',
        layout:false

    }
    registrarVisita("lips");
    response.render('lips', contexto);
});

app.get('/eyes', function(request, response){   

    
    var contexto = {
        titulo: 'Mask',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        fondo:'/images/fondomake.png',
        imagen: '/images/mascara.png',
        layout:false

    }
    registrarVisita("eyes");
    response.render('eyes', contexto);
});

app.listen(4000);