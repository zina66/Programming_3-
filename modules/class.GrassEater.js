var LivingCreature = require('./class.LivingCreature.js');

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 3;
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
    chooseCell(character, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(character , matrix);
    }
    move(matrix) {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(0, matrix);

        var newCell = Math.floor(Math.random(emptyCells));

        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;

            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat(matrix) {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(1, matrix);

        var newCell = Math.floor(Math.random(emptyCells));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;

            this.energy++;

            if (this.energy >= 15) {
                this.mul();
            }
        }

        else {
            this.move(matrix);
        }
    }

    mul() {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(1);

        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0; //kaskatzeli
            matrix[newY][newX] = new GrassEater(newX, newY, this.index);

            this.y = newY;  //kaskatzeli
            this.x = newX;  //kaskatzeli
            
            this.energy = 3;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}