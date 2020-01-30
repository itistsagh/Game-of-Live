var socket = io();
var matrix = [];

var side = 5;
var m = 70;
var n = 70;

var grassArr = [];
var GrassEaterArr = [];
var EaterArr = [];
// var SquareArr =[];
var BlueArr = [];
function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    socket.on('send matrix',matrix);

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
         
               fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if(matrix[y][x]==5){
                fill('blue');
            }
            // if (matrix[y][x] == 4) {
            //     fill('black');
            // }
            rect(x * side, y * side, side, side);
        }
    } 
    socket.on('send matrix',matrix);
    for (var i in grassArr) {
        grassArr[i].mul(); 
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].move();
        GrassEaterArr[i].eat();
        GrassEaterArr[i].mul();
        GrassEaterArr[i].die();
    }
    for (var i in EaterArr) {
        EaterArr[i].move();
        EaterArr[i].eat(); 
        EaterArr[i].mul();
        EaterArr[i].die()
    }
    for (var i in BlueArr) {
            BlueArr[i].move();
            BlueArr[i].eat();
            BlueArr[i].mul();
            BlueArr[i].die()
    }
//     for (var i in SquareArr ) {
//     SquareArr[i].move();
//     SquareArr[i].eat();  
//     SquareArr[i].die();  
//    } 
   socket.on('send matrix',matrix);
}


