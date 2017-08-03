const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const pR = 30;
const player = new Player(canvas.width/2, 150, pR);
const ui = new UI();
let enemies = [];

setInterval(update, 10); // Redraw canvas every 10ms
setInterval(createEnemy, 1000); // Create new enemy every 1s


/* Update the game state and redraw components */
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear whole canvas

    // Update and draw each enemy
    enemies.forEach((enemy, index, object) => {
        if(player.detectCollision(enemy)){
            object.splice(index, 1);
            player.killedEnemy(1);
        }
        enemy.bounce();
        enemy.draw();
    });

    // Player and UI
    player.draw();
    ui.draw(canvas, player);
}


function createEnemy() {
    const enemyRadius = randInRange(25,29);
    const enemyX = randInRange(enemyRadius, canvas.width - enemyRadius);
    const enemyY = randInRange(100 + enemyRadius, canvas.height - enemyRadius);
    enemies.push(new Enemy(enemyX, enemyY, enemyRadius));
}


function randInRange(min, max) {
  return Math.random() * (max - min) + min;
}
