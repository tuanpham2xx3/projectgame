class Crep {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.rad = 20;
        this.hp = 500;
        this.image = new Image();
        this.image.src = './asset/dragoncrep.png';
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0.003;
        this.directionx = 1;
        this.directiony = 1;
        this.frameWidth = 150; // Chiều rộng[of frame]
        this.frameHeight = 150; // Chiều cao[of frame]
        this.currentFrame = 0; // Khung hình hiện tại
        this.totalFrames = 12; // Tổng số khung hình
        this.frameDelay = 200; // Thời gian giữa các khung hình (ms)
        this.lastFrameTime = 0;
        this.movingRight = true;
        this.lastBulletTime = 0;
        this.timeDefeat = 300;
    }
    defeat() {
        this.timeDefeat -= 1;
    }
    draw(context,n){
        context.beginPath();
        // context.arc(this.x - 35, this.y - 35, this.rad, 0, Math.PI * 2);
        // context.fillStyle = 'green';
        // context.fill();
        // context.closePath();
        context.drawImage(
            this.image,
            (this.currentFrame % 3) * this.frameWidth, // Vị trí x của frame (3 khung hình trên mỗi hàng)
            this.frameHeight * n,//Math.floor(this.currentFrame / 3) * this.frameHeight, // Vị trí y của frame
            this.frameWidth, // Chiều rộng của frame
            this.frameHeight, // Chiều cao của frame
            this.x - this.frameWidth / 2, // Vị trí x để vẽ
            this.y - this.frameHeight / 2, // Vị trí y để vẽ
            this.frameWidth /2, // Chiều rộng để vẽ
            this.frameHeight /2// Chiều cao để vẽ
        );
    }
    updateCrep() {
        this.speedX *= 0.85;
        this.speedY *= 0.85;
    }
    move(x1,y1,context) {
        if (Math.abs(this.x - x1) > 5 ) {
            const dx = x1 - this.x;
            this.speedX += dx * this.acceleration;
            this.x += this.speedX;
            this.directionx = dx > 0 ? 1 : -1;
            this.draw(context,1);

        } else if (Math.abs(this.x - x1) < 5 ) {
            const dy = y1 - this.y;
            this.speedY += dy * this.acceleration;
            this.y += this.speedY;
            this.directiony = dy > 0 ? 1 : -1;
            this.draw(context,2);
        }
    }
    updateCrepFrame(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian của khung hình hiện tại
        }
    }
}