var express = require('express');
var exphbs= require('express-handlebars');

var app = express();
app.use(express.static('public'));

var fs = require ('fs');
var cont = 0;


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
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Página Uno',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    response.render('paguno', contexto);
});


app.get('/pagdos', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Página Dos',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    response.render('pagdos', contexto);
});

app.get('/pagtres', function(request, response){   
    //el contexto siempre es un objeto
    var contexto = {
        titulo: 'Página Tres',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit malesuada, magnis fames ridiculus laoreet sollicitudin ad enim duis arcu, ',
        layout:false

    }
    response.render('pagtres', contexto);
});
//aqui se le dice el puerto y las rutas
app.listen(4000);