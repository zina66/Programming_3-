var xqanak = 40;
var yqanak = 40;
var matrix = [];


for (var y = 0; y < yqanak; y++) {
    matrix[y] = [x];
    for (var x = 0; x < xqanak; x++) {
        if (x + y < 54) {
            matrix[y][x] = Math.floor(Math.random() * 6);
        }
        else {
            matrix[y][x] = 5;

        }
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new GrassEaterEater(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new lightning(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new river(x, y, 5);
           
        }
    }
}

module.exports = matrix;