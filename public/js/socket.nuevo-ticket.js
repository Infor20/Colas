// Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual', function(res) {
    label.text(res.actual);
});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});