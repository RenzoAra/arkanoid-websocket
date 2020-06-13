var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.render('login');
  });

  app.post('/',function(req,res){
    var entrada = req.body.textbox;
    res.render('salaChat',{locals:{salida: entrada}});
    io.emit('nuevoUsuarioConectado', {timestamp: new Date(), salida: entrada});

});

io.on('connection', function(socket){
  socket.on('nuevoMensaje', (data) => {
      io.emit('nuevoMensaje', data)
  })
  socket.on('nuevoUsuarioConectado', (data) => {
    io.emit('nuevoUsuarioConectado', data)
})
  socket.on('usuarioDesconexion', (data) => {
    io.emit('usuarioDesconexion', data)
  })
});


http.listen(3000, function(){
  console.log('listo en puerto :3000');
});