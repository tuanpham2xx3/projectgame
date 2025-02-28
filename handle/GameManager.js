class GameManager {
    constructor(hpplayer, hpboss, p , b) {
        this.xp = p.x;
        this.yp = p.y;
        this.xb = b.x;
        this.yb = b.y;
        this.score = 0;
        this.hpPlayer = hpplayer;
        this.hpBoss = hpboss;
        this.state = 'playing';
    }
    setState(newState) {
        this.state = newState;
    }
    state() {
        return this.state;
    }

    resetGame() {
        this.state = 'playing';
        document.getElementById('button').style.display = 'none'; // Ẩn nút khi khởi động lại

    }
    draw(context,level,score,bps,lvboss,tk,tkb,boss) {
        context.fillStyle = 'red';
        context.font = '30px BlackJack';
        context.fillText('LV    : ' + level, 50, 420);
        context.fillText('SCORE   : ' + parseInt(score), 50, 460);
        context.fillText('POWER  : ' + bps, 50, 500);
        context.fillText('PRESS  Z  FOR  PAUSE', 50, 540);
        //context.fillText('LV BOSS: ' + lvboss, 550, 200);
        context.fillStyle = 'white';
        context.fillText(parseInt(this.hpPlayer), 250, 615);
        if(level == 4) {
            context.font = '20px BlackJack';
            context.fillText( + parseInt(this.hpBoss), boss.x - 15, boss.y -85);
        }
        //context.fillStyle = 'blue';
        //context.fillText('ENERGY: ' + tk, 550, 250);
        //context.fillText('TIME SKILL BOSS: ' + tkb, 550, 400);
        if(tk == 10000) {
            context.font = '20px BlackJack';
            context.fillStyle = 'white'; 
            context.fillText('Press  Space  For  Use  Skill', 150, 650);
        }

    }
}