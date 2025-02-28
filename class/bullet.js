class BulletPlayer {
    constructor(player) {
        this.x = player.x-2;
        this.y = player.y-50;
        this.rad = 5;
        this.image = new Image();
        this.image.src = './asset/bulletPlayer.png';
        this.speedY = -2;
        this.frameWidth = 1320; // Chiều rộng của mỗi frame
        this.frameHeight = 459; // Chiều cao của mỗi frame
        this.currentFrame = 0; // Khung hình hiện tại
        this.totalFrames = 6; // Tổng số khung hình
        this.frameDelay = 200; // Thời gian giữa các khung hình (ms)
        this.lastFrameTime = 0; // Thời gian của khung hình trước

    }
    draw(context) {
        // context.beginPath();
        // context.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
        // context.fillStyle = 'red';
        // context.fill();
        // context.closePath();
        const frameWidth = this.frameWidth / this.totalFrames; // Calculate width of each frame
        const scaleFactor = 0.1; // Tỉ lệ thu nhỏ (0.5 = nhỏ đi 50%)
        const scaledWidth = frameWidth * scaleFactor; // Tính toán chiều rộng đã thu nhỏ
        const scaledHeight = this.frameHeight * scaleFactor; // Tính toán chiều cao đã thu nhỏ
        context.drawImage(this.image, this.currentFrame * frameWidth, 0, frameWidth, this.frameHeight, this.x, this.y, scaledWidth, scaledHeight);
    }
    shoot(){
        this.y += this.speedY;
    }
    updateFrame(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian khung hình
        }
    } 
}
class BulletCrep {
    constructor(player) {
        this.x = player.x-47;
        this.y = player.y-30 ;
        this.rad = 5;
        this.image = new Image();
        this.image.src = './asset/bulletCrep.png';
        this.speedY = -1.5;
        this.frameWidth = 900; // Chiều rộng của mỗi frame
        this.frameHeight = 250; // Chiều cao của mỗi frame
        this.currentFrame = 0; // Khung hình hiện tại
        this.totalFrames = 6; // Tổng số khung hình
        this.frameDelay = 200; // Thời gian giữa các khung hình (ms)
        this.lastFrameTime = 0; // Thời gian của khung hình trước

    }
    draw(context) {
        // context.beginPath();
        // context.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
        // context.fillStyle = 'red';
        // context.fill();
        // context.closePath();
        const frameWidth = this.frameWidth / this.totalFrames; // Calculate width of each frame
        const scaleFactor = 0.1; // Tỉ lệ thu nhỏ (0.5 = nhỏ đi 50%)
        const scaledWidth = frameWidth * scaleFactor; // Tính toán chiều rộng đã thu nhỏ
        const scaledHeight = this.frameHeight * scaleFactor; // Tính toán chiều cao đã thu nhỏ
        context.drawImage(this.image, this.currentFrame * frameWidth, 0, frameWidth, this.frameHeight, this.x, this.y, scaledWidth, scaledHeight);
    }
    shoot(){
        this.y -= this.speedY;
    }
    updateFrame(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian khung hình
        }
    } 
}
class BulletBoss {
    constructor(boss) {
        this.x = boss.x;
        this.y = boss.y;
        this.rad = 5 ;
        this.image = new Image();
        this.image.src = './asset/bulletBoss.png';
        this.speed = 1;
        this.direction = Math.random() * 2 * Math.PI ;
        this.frameWidth = 920; // Chiều rộng của mỗi frame
        this.frameHeight = 154; // Chiều cao của mỗi frame
        this.currentFrame = 0; // Khung hình hiện tại
        this.totalFrames = 6; // Tổng số khung hình
        this.frameDelay = 200; // Thời gian giữa các khung hình (ms)
        this.lastFrameTime = 0; // Thời gian của khung hình trước

    }
    draw(context) {
        const frameWidth = this.frameWidth / this.totalFrames; // Calculate width of each frame
        const scaleFactor = 0.3; // Tỉ lệ thu nhỏ (0.5 = nhỏ đi 50%)
        const scaledWidth = frameWidth * scaleFactor; // Tính toán chiều rộng đã thu nhỏ
        const scaledHeight = this.frameHeight * scaleFactor; // Tính toán chiều cao đã thu nhỏ
        context.drawImage(this.image, this.currentFrame * frameWidth, 0, frameWidth, this.frameHeight, this.x-20, this.y-20, scaledWidth, scaledHeight);

        // context.fillStyle = 'blue'; // Màu sắc của hình tròn
        // context.beginPath(); // Bắt đầu vẽ
        // context.arc(this.x, this.y, 10, 0, Math.PI * 2); // Vẽ hình tròn
        // context.fill(); // Điền màu cho hình tròn
        // context.closePath(); // Kết thúc vẽ
    }
    shoot(){
        this.y += this.speed * Math.sin(this.direction); // Cập nhật vị trí theo hướng
        this.x += this.speed * Math.cos(this.direction);
    }
    updateFrame(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian khung hình
        }
    }

}
