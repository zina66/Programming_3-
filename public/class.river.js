class river {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy
        this.index = index;
        this.multiply = 0;
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

    eat() {
        this.multiply++;
        if (this.multiply >= 3) {
            if (this.x + this.y == 54) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (this.x + this.y == 53) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (this.x + this.y == 52) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

}