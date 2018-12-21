var LivingCreature = require('./class.LivingCreature.js');

module.exports = class river extends LivingCreature{
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

    eat(matrix) {
        this.multiply++;

        if (this.multiply >= 3) {
            if (this.x + this.y == 54) {

                matrix[this.y - 1][this.x] = new river(this.x, this.y - 1, this.index);
                matrix[this.y][this.x - 1] = new river(this.x - 1, this.y, this.index);
            }
            else if (this.x + this.y == 53) {
                matrix[this.y - 1][this.x] = new river(this.x, this.y - 1, this.index);
                matrix[this.y][this.x - 1] = new river(this.x - 1, this.y, this.index);
            }
            else if (this.x + this.y == 52) {

                matrix[this.y - 1][this.x] = new river(this.x, this.y - 1, this.index);
                matrix[this.y][this.x - 1] = new river(this.x - 1, this.y, this.index);
            }
        }
    }
}