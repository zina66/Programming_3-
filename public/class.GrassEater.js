class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;


            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
            this.energy++;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 15) {
                this.mul();
            }
        }

        else {
            this.move();
        }
    }
    mul() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
            var newGrassEater = new GrassEater(newX, newY, this.index);
            GrassEaterArr.push(newGrassEater);
            this.energy = 3;
        }
    }
    die() {
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}