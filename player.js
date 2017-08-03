class Player {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = 1;
        this.dy = 1;
        this.maxHP = 30;
        this.hp = this.maxHP;
        this.maxXP = 10;
        this.xp = 0;
        this.level = 1;
        this.gold = 0;
    }


    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#ffaa00";
        ctx.fill();
        ctx.closePath();
    }


    detectCollision(enemy) {
        let deltaX = this.x - enemy.x;
        let deltaY = this.y - enemy.y;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if(distance < this.radius + enemy.radius) {
            return true;
        }
        return false;
    }


    killedEnemy(eXP) {
        this.hp--;
        this.xp += eXP;
        this.gold++;
        if(this.xp >= this.maxXP) {
            this.xp = 0;
            this.maxXP += 10;
            this.level++;
            const hpIncrease = Math.round(randInRange(1, 4));
            this.maxHP += hpIncrease;
            this.hp += hpIncrease;
            this.radius += 2;
        }
    }


    randInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
}
