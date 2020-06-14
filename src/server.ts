import Juego from "./Juego";

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
var j = new Juego();

app.get('/', function(req, res){
    res.render('login');
  });

  app.post('/',function(req,res){
    var entrada = req.body.textbox;
    j.nuevoJugador(entrada)
    res.render('menu',{locals:{salida: entrada}});
});

  app.post('/Invitado',function(req,res){
    j.añadirInvitado()
    res.render('menu',{locals:{salida: ""}});
});

  app.get('/tabla', function(req, res){
    res.render('tabla',{locals:{tabla : j.tablapuntaje}});
  });


  app.get('/inst', function(req, res){
    res.render('inst');
  });

  app.post('/game', function(req, res){
    var entrada = req.body.textbox;
    res.render('game',{locals:{salida: entrada}});
  });


io.on('connection', function(socket){
  socket.on('nuevoPunto', (data) => {
  })
});


http.listen(3001, function(){
  console.log('listo en puerto 3000');
});