class Player {
    constructor() {
        this.x = 250;
        this.y = 550;
        this.width = 5;
        this.height = 5;
        this.rad = 5;
        this.image = new Image();
        this.image.src = './asset/player.png';
        this.direction = 1; // 1: phải, -1: trái
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0.5;
        this.hp = 100;
        this.bps = 2; //bull per sec
        this.imageskill = new Image();
        this.imageskill.src = './asset/playerskill.png';
        this.currentFrame = 0; // Khung hình hiện tại
        this.lastFrameTime = 0;
        this.frameDelay = 100; // Thời gian giữa các khung hình (ms)
        this.totalFrames = 16; // Tổng số khung hình
    }
    draw(context) {
        context.globalAlpha = 1.0;
        context.drawImage(this.image, this.x - 47 , this.y - 50, 100, 100);
        
        context.fillStyle = 'red'; // Thiết lập màu đỏ
        context.beginPath();
        context.arc( this.x, this.y, 5, 0, Math.PI * 2); // Vẽ hình tròn
        context.fill();
        context.closePath();
        

    }
    skill(context) {
            // Set the rectangle's width and height
    // const width = 150;  // Chiều rộng hình chữ nhật
    // const height = 400; // Chiều cao hình chữ nhật
    
    // // Vẽ hình chữ nhật
    // context.beginPath();
    // context.rect(this.x - 70 , this.y - 450, width, height);
    // context.strokeStyle = 'red';  // Màu viền
    // context.lineWidth = 2;        // Độ dày viền
    // context.stroke();             // Vẽ viền
    
    // // Nếu muốn tô màu cho hình chữ nhật
    // context.fillStyle = 'rgba(255, 0, 0, 0.2)';  // Màu đỏ với độ trong suốt
    // context.fill();
    this.imageskill = new Image();
    this.imageskill.src = './asset/playerskill.png';
    const widthimg = 240; // Frame width
    const heightimg = 320; // Frame height
    context.drawImage(
        this.imageskill,
        (this.currentFrame % 16) * widthimg, // Vị trí x[of frame]
        Math.floor(this.currentFrame / 16) * heightimg, // Vị trí y[of frame]
        widthimg, // Chiều rộng[of frame]
        heightimg, // Chiều cao[of frame]
        this.x - 100 , // Vị trí x[of frame]
        this.y -450, // Vị trí y[of frame]
        200, // Chiều rộng[of frame]
        400 // Chiều cao[of frame]
    );

    }
    movex(direction) {
        this.speedX += direction * this.acceleration;
        this.x += this.speedX;
        //this.x = Math.max(this.width, Math.min(this.x, 500 - this.width)); // Giới hạn x
    }
    movey(direction) {
        this.speedY += direction * this.acceleration;
        this.y += this.speedY;
        //this.y = Math.max(this.height, Math.min(this.y, 600 - this.height)); // Giới hạn y
    }
    update() {
        this.speedX *= 0.1;
        this.speedY *= 0.1;
    }
    updatePlayer(currentTime) {
        if (currentTime - this.lastFrameTime >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames; // Cập nhật khung hình
            this.lastFrameTime = currentTime; // Cập nhật thời gian của khung hình hiện tại
        }
    }
}