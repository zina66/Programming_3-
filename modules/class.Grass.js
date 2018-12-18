var LivingCreature = require('./class.Grass.js');

class Grass extends LivingCreature{
    
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[y][x] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }

}