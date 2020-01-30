


var matrix = [];

var side = 5;
var m = 70;
var n = 70;

var grassArr = [];
var GrassEaterArr = [];
var EaterArr = [];
var SquareArr =[];
var BlueArr = [];
function setup() {

    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.floor(random([4,0,5,3,0,0,0,2,2,2,0,1,1,1,1,1,1,1,1,0,5,0,3, 0, 0,0,0,0,1,1,1,1,0,0,0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]));
        }
    };

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                GrassEaterArr.push(ge);
            }
            else if (matrix[y][x] == 3) {
                var eater = new Eater(x, y,3);
                EaterArr.push(eater);
            }
            else if (matrix[y][x] == 5) {
                var blue = new Blue(x, y,5);
               BlueArr.push(blue);
            }
            // else if (matrix[y][x] == 4) {
            //     var square = new Square(x, y,4);
            //     SquareArr.push(square);
            // }
        }
    }

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
            if (matrix[y][x] == 4) {
                fill('black');
            }
            rect(x * side, y * side, side, side);
        }
    } 
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
    for (var i in SquareArr ) {
    SquareArr[i].move();
    SquareArr[i].eat();  
    SquareArr[i].die();  
   } 
}




