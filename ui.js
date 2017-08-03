class UI {
    draw(canvas, player) {
        this.drawUIBox(canvas);
        this.drawBars(player);
        this.drawStats(player);
    }


    drawUIBox(canvas) {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, 100);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();
        ctx.closePath();
    }


    drawBars(player) {
        /* Health bar */
        // Outline
        ctx.beginPath();
        ctx.rect(4, 4, 202, 22);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();

        // Red bar (bg)
        ctx.beginPath();
        ctx.rect(5, 5, 200, 20);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

        // Green bar (fg)
        ctx.beginPath();
        ctx.rect(5, 5, (player.hp/player.maxHP) * 200, 20);
        ctx.fillStyle = "#00ff00";
        ctx.fill();
        ctx.closePath();

        // Health text
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(player.hp+"/"+player.maxHP, 12, 21);

        /* Experience bar */
        // Outline
        ctx.beginPath();
        ctx.rect(4, 29, 202, 10);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();

        // White bar (bg)
        ctx.beginPath();
        ctx.rect(5, 30, 200, 8);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();

        // Gold bar (fg)
        ctx.beginPath();
        ctx.rect(5, 30, (player.xp/player.maxXP) * 200, 8);
        ctx.fillStyle = "#ffdd63";
        ctx.fill();
        ctx.closePath();

        // Experience text
        ctx.font = "8px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(player.xp+"/"+player.maxXP, 12, 37);
    }


    drawStats(player) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Level: "+player.level, 250, 21);
    }
}
