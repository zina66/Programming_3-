var LivingCreature = require('./class.LivingCreature.js');

module.exports = class Grass extends LivingCreature{
    
    mul(matrix) {
        this.multiply++;
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }

}