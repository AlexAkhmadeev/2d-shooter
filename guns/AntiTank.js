function AntiTank() {

    this.a_step = 15;
    this.a_width = 15;
    this.a_height = 7;
    this.damage = 90;
    this.src = 'textures/bullet.png';
    this.startSoundSrc = 'sounds/weapons/explode3.wav';
    this.stopSoundSrc = 'sounds/weapons/ric' + randomSound() + '.wav';
    this.startSpriteSrc = 'textures/flash.png';
    this.startSpriteDiametr = 35;
    this.startSpriteDelay = 15;
    this.stopSpriteSrc = 'textures/bullet_sprite.png';
    this.stopSpriteDiametr = 20;
    this.stopSpriteDelay = 35;

    function randomSound() { // рандомная-гавно-функция
        var number;
        number = parseInt(Math.random()*5);
        if(number == 0) return 1;
        if(number == 1) return 2;
        if(number == 2) return 3;
        if(number == 3) return 4;
        if(number == 4) return 5;

    }

}
