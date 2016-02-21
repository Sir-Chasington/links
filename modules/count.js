module.exports = function(io) {

  var countUp = 0;

  setInterval(function() {
    countUp++;
    var countTimer = formatSeconds(countUp);
    io.sockets.emit('timer', { countUp: countTimer });
  }, 1000);

  io.sockets.on('connection', function (socket) {
    socket.on('reset', function (data) {
      countUp = 0;
      io.sockets.emit('timer', { countUp: countUp });
    });
  });

  var formatSeconds = function(secs){
    var pad = function(n) {
        return (n < 10 ? "0" + n : n);
    };

    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs / 3600) % 1 * 60); // Remainder of an hour of seconds x 60
    var s = Math.floor((secs / 60) % 1 * 60); // Remainder of a minute of seconds x 60

    var counts = {
      hour:pad(h),
      minute:pad(m),
      seconds:pad(s)
    };

    return counts;
    //return pad(h) +":"+ pad(m) +":"+ pad(s);
  };

};
