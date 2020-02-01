var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

var matrix = [];

io.sockets.emit('send matrix', matrix);
var grassArr = [];
var grassEaterArr = [];
var EaterArr = [];
var SquareArr =[];
var BlueArr = [];

var GrassEater = require("./GrassEater");

function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater)

            }
        }
    }}

    io.sockets.emit('send matrix', matrix);

    function game() {
        for (var i in grassArr) {
            grassArr[i].mul()
        }
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }  
    }
io.sockets.emit("send matrix", matrix);

    setInterval(game, 1000);

    io.on('connection', function () {
        createObject(matrix)
    });
    
    
    // var matrix = [];

// m=10;
// n=10;
// for (let i = 0; i < m; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < n; j++) {
//         matrix[i][j] = Math.floor(Math.random()*5);
//         console.log( matrix[i][j]);
//     }
// };



// for (var y = 0; y < matrix.length; ++y) {
//     for (var x = 0; x < matrix[y].length; ++x) {
//         if (matrix[y][x] == 1) {
//             var gr = new Grass(x, y, 1);
//             grassArr.push(gr);
//         }
//         else if (matrix[y][x] == 2) {
//             var ge = new GrassEater(x, y, 2);
//             GrassEaterArr.push(ge);
//         }
//         else if (matrix[y][x] == 3) {
//             var eater = new Eater(x, y,3);
//             EaterArr.push(eater);
//         }
//         else if (matrix[y][x] == 5) {
//             var blue = new Blue(x, y,5);
//            BlueArr.push(blue);
//         }
//         // else if (matrix[y][x] == 4) {
//         //     var square = new Square(x, y,4);
//         //     SquareArr.push(square);
//         // }
//     }
// }


// setInterval(game,1000);
// io.on('connection',function(){
//     createObject(matrix);
// })
