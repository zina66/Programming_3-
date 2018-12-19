var side = 20;
var matrix = [];
var socket;

function setup() {
    socket = io();
    frameRate(0);

    socket.on("firstMatrix",function(mtx){
        matrix = mtx;
        createCanvas(matrix[0].length * side, matrix.length * side);
        console.log(matrix);
    });

    background('#acacac');
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index  == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index  == 3) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index  == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index  == 5) {
                if (x + y > 50) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
            }
            else{
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
}