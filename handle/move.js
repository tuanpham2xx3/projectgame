let keys = {};
let mouseX = 0, mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function handleMovement(player) {
    // Di chuyển về phía vị trí chuột
    const playerX = player.x + player.width / 2;
    const playerY = player.y + player.height / 2;
    const dx = mouseX - playerX;
    const dy = mouseY - playerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 5) {
        const speed = Math.min(distance * 0.5, 1000);
        player.movex(dx / distance * speed);
        player.movey(dy / distance * speed);
    }
}
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
