class Enemy {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = randInRange(1,3);
        this.dy = randInRange(1,3);
    }


    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#cc0000";
        ctx.fill();
        ctx.closePath();
    }


    bounce() {
        this.x += this.dx;
        this.y += this.dy;
        // Bounce the enemy if it hit a wall
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx *= -1;
        } else if(this.y + this.radius > canvas.height || this.y - this.radius < 100) {
            this.dy *= -1;
        }
    }


    randInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
}
