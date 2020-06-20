import Juego from "./Juego";

const path = require('path')
const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
var j = new Juego();

app.use(express.static(path.join(__dirname,'../particles')));

app.use(express.static(path.join(__dirname,'../img')));

app.get('/', function(req, res){
    res.render('login');
  });

app.post('/',function(req,res){
    var entrada = req.body.textbox;
    if(j.buscarJugadorPorNombre(entrada)==null){
      j.nuevoJugador(entrada)
      console.log(j.tablapuntaje)
    }
    else{
      console.log(j.tablapuntaje)
    }
    res.render('menu',{locals:{salida: entrada}});
});

  app.post('/Invitado',function(req,res){
    res.render('menu',{locals:{salida: j.añadirInvitado()}});
    console.log(j.tablapuntaje)
});

  app.get('/tabla', function(req, res){
    res.render('tabla',{locals:{tabla : j.tablapuntaje}});
  });


  app.get('/inst', function(req, res){
    res.render('inst');
  });
  
  app.post('/salir', function(req, res){
    var entrada = req.body.textbox;
    j.quitarInvitado(entrada)
    console.log(j.tablapuntaje)
    res.render('login');
  });

  app.post('/game', function(req, res){
    var entrada = req.body.textbox;
    res.render('game',{locals:{salida: entrada}});
  });


io.on('connection', function(socket){
  socket.on('nuevoPunto', (data) => {
    j.sumarPuntaje(data.nombre)
    console.log(j.ranking())
  })
});


http.listen(3000, function(){
  console.log('listo en puerto 3000');
});