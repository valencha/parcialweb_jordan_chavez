

/////PARCIAL ISABELLA JORDAN Y VALENTINA CHAVEZ

var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));
var contadorUno=0;

var fs = require ('fs');
var f=new Date();
cad=f.getHours(); 

var contador = {
   paguno : 0,
   pagdos : 0,
    pagtres : 0,
  };

  function archivoEscrito(){
    

    fs.writeFileSync('visitas.txt', 'Visitas del pagUno: ' + contador.paguno+ f+'\nVisitas de pagdos: ' + contador.pagdos+ f+'\nVisitas de pagTres: ' + contador.pagtres+''+ f, 'utf8');

    fs.readFile('visitas.txt', 'utf8', function(err, data){
      if(err) throw err;
      console.log(data);
    });
}


app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//aqui se empiezan a configurar las rutas

app.get('/', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Pagina principal',
        layout:false

    }
    response.render('home', contexto);
});
app.get('/admin', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Admin',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    response.render('admin', contexto);
});

app.get('/paguno', function(request, response){   
   
    contador.paguno++;
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Página Uno',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    archivoEscrito();
    response.render('paguno', contexto);
});


app.get('/pagdos', function(request, response){   
    contador.pagdos++;
    var contexto = {
        titulo: 'Página Dos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    archivoEscrito();
    response.render('pagdos', contexto);
});

app.get('/pagtres', function(request, response){   
    //el contexto siempre es un objeto
    contador.pagtres++;
    var contexto = {
        titulo: 'Página Tres',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    archivoEscrito();
    response.render('pagtres', contexto);
});
//aqui se le dice el puerto y las rutas
app.listen(4000);