class Boss {
    constructor() {
        this.x = 210;
        this.y = 50;
        this.rad = 50;
        this.image = new Image();
        this.image.src = './asset/boss.png';
        this.imageskill = new Image();
        this.imageskill.src = './asset/bossskill.png';
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0.5;
        this.directionx = 1;
        this.directiony = 1;
        this.hp = 10000;
        this.frameWidth = 191; // Chiều rộng của mỗi frame
        this.frameHeight = 161; // Chiều cao của mỗi frame
        this.currentFrame = 0; // Khung hình hiện tại
        this.totalFrames = 12; // Tổng số khung hình
        this.frameDelay = 100; // Thời gian giữa các khung hình (ms)
        this.lastFrameTime = 0;
        this.lastFrameTimeSK = 0;
        this.currentFrameSK = 0; // Khung hình hiện tại
    }
    draw(context) {
        context.drawImage(
            this.image,
            (this.currentFrame % 3) * this.frameWidth, // Vị trí x của frame (3 khung hình trên mỗi hàng)
            Math.floor(this.currentFrame / 3) * this.frameHeight, // Vị trí y của frame
            this.frameWidth, // Chiều rộng của frame
            this.frameHeight, // Chiều cao của frame
            this.x - this.frameWidth / 2, // Vị trí x để vẽ
            this.y - this.frameHeight / 2, // Vị trí y để vẽ
            this.frameWidth, // Chiều rộng để vẽ
            this.frameHeight // Chiều cao để vẽ
        );
    }
    genSkillBoss(context){
        const widthimg = 200; // Frame width
        const heightimg = 200; // Frame height
        let position = [
            {x : 200 , y : 200},
            {x : 400 , y : 400},
            {x : 600 , y : 200},
            {x : 800 , y : 400},
            {x : 1000 , y : 200},
            {x : 1200 , y : 400}
        ];
        for (let i = 0 ; i < 6 ; i++) {
            context.drawImage(
                this.imageskill,
                (this.currentFrameSK % 2) * widthimg,
                Math.floor(this.currentFrameSK / 3) * heightimg,
                widthimg,
                heightimg,
                position[i].x,
                position[i].y,
                widthimg,
                heightimg
            );
        }

    }
    move() {
        let step = 1;
        // Di chuyển qua phải
        if (this.x < 1200 && this.directionx === 1) {
            this.speedX += step * this.acceleration;
            this.x += this.speedX;
        }
        // Di chuyển qua trái
        if (this.x > 400 && this.directionx === -1) {
            this.speedX += -1 * step * this.acceleration;
            this.x += this.speedX;
        }

        if (this.y < 300 && this.directiony === 1) {
            this.speedY += step * this.acceleration;
            this.y += this.speedY;
        }
        // Di chuyển qua trái
        if (this.y > 150 && this.directiony === -1) {
            this.speedY += -1 * step * this.acceleration;
            this.y += this.speedY;
        }

        if (this.y >= 300) {
            this.directiony = -1; // Đổi hướng sang trái
        } else if (this.y <= 150) {
            this.directiony = 1; // Đổi hướng sang phải
        }

        // Đảo hướng khi chạm vào biên
        if (this.x >= 1200) {
            this.directionx = -1; // Đổi hướng sang trái
        } else if (this.x <= 400) {
            this.directionx = 1; // Đổi hướng sang phải
        }
    }
    movey(direction) {
        this.speedY += direction * this.acceleration;
        this.y += this.speedY;
        this.y = Math.max(this.height, Math.min(this.y, 1000 - this.height)); // Giới hạn y
    }
    update() {
        this.speedX *= 0.1;
        this.speedY *= 0.1;
    }
    updateBoss(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian của khung hình hiện tại
        }
    }
    updateSkillBoss(currentTime) {
        if (currentTime - this.lastFrameTimeSK >= this.frameDelay) {
            this.currentFrameSK = (this.currentFrameSK + 1) % 6; // Cập nhật khung hình
            this.lastFrameTimeSK = currentTime; // Cập nhật thời gian của khung hình hiện tại
        }
    }
}