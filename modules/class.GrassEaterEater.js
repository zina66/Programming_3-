var LivingCreature = require('./class.LivingCreature.js');

module.exports = class GrassEaterEater extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 6;
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
        return super.chooseCell(character);
    }

    move() {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(0);

        var newCell = random(emptyCells);

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
    eat() {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(2);

        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.y = newY;
            this.x = newX;

            this.energy++;

            if (this.energy >= 7) {
                this.mul();
            }
        }

        else {
            this.move();
        }
    }

    mul() {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(2);

        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0; // ???
            matrix[newY][newX] = new GrassEaterEater(newX, newY, this.index);

            this.y = newY;  //???
            this.x = newX;  //???

            this.energy = 6;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
    }
}