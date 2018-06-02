var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.on('newMessage', function (newMessage) {
        console.log(newMessage);
    });

    socket.emit('createMessage', {
        from: 'Jenny',
        text: 'Wie gehts?'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
})