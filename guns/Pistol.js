function Pistol() {

    this.a_step = 7;
    this.a_width = 12;
    this.a_height = 3;
    this.damage = 8;
    this.src = 'textures/bullet.png';
    this.startSoundSrc = 'sounds/weapons/pl_gun3.wav';
    this.stopSoundSrc = 'sounds/weapons/ric' + randomSound() + '.wav';
    this.startSpriteSrc = null;
    this.startSpriteDiametr = 50;
    this.startSpriteDelay = 15;
    this.stopSpriteSrc = 'textures/bullet_sprite.png';
    this.stopSpriteDiametr = 10;
    this.stopSpriteDelay = 25;

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
