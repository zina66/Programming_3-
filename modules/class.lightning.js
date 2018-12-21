var LivingCreature = require('./class.LivingCreature.js');


module.exports = class lightning extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 2;
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
        return super.chooseCell(character, matrix);

    }

    move(matrix) {
        this.getNewCoordinates();

        var emptyCells = this.chooseCell(0, matrix);
        var newCell = Math.floor(Math.random(emptyCells));

        if (newCell) {
            this.die();
        }
    }

    eat(matrix) {
        this.getNewCoordinates();

        this.multiply++;

        var emptyCells = this.chooseCell(1, matrix);

        var newCell = Math.floor(Math.random(emptyCells));

        if (newCell) {
            if (this.multiply >= 4) {

                var newX = newCell[0];
                var newY = newCell[1];

                //matrix[newY][newX] = matrix[this.y][this.x];
                matrix[newY][newX] = new lightning(this.x, this.y, this.index);;
                matrix[this.y][this.x] = 0;

                this.y = newY;
                this.x = newX;
            }
        }
        else {
            this.move(matrix);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}