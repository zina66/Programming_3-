var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000); 

var matrix = require("./modules/matrix");
console.log(matrix);

io.on('connection', function (socket) {
  socket.emit("firstMatrix", matrix);
});

setInterval(draw, time);

var framecount = 5;

var time = 1000 / framecount;

var weather = "vochinch";
var weathercount = 0;

function draw() {
  weathercount++;

  if (weathercount % 10 == 5) {
    weather = "spring";
  }
  else if (weathercount % 10 == 4) {
    weather = "summer";
  }
  else if (weathercount % 10 == 3) {
    weather = "autmn";
  }
  else if (weathercount % 10 == 2) {
    weather = "winter";
  }

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x].index == 1) {
        matrix[y][x].mul(matrix);
      }
      else if (matrix[y][x].index == 2) {
        matrix[y][x].eat(matrix);
      }
      else if (matrix[y][x].index == 3) {
        matrix[y][x].eat(matrix);
      }
      else if (matrix[y][x].index == 4) {
        matrix[y][x].eat(matrix);
      }
      else if (matrix[y][x].index == 5) {
        if (x + y > 50) {
          matrix[y][x].eat(matrix);
        }
      }
    }
  }
}
io.sockets.emit("weather", weather);
