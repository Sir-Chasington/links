module.exports = function(io) {
    function connection(socket) {
        function disconnect() {
            console.log("disconnected");
        }

        function getmsg(msg) {
            io.sockets.emit("broadcast",msg);
        }

        function spy(move) {
            socket.broadcast.emit("spy",move);
        }

        socket.on("disconnect",disconnect);
        socket.on("msg",getmsg);
        socket.on("spy",spy);

        var intv = setInterval(function(){
            socket.emit("hello",Math.random());
        },1000);
    }

    
    io.on("connection",connection);
};