function Launcher() {

    this.a_step = 6;
    this.a_width = 40;
    this.a_height = 5;
    this.damage = 45;
    this.src = 'textures/rocket.png';
    this.startSoundSrc = 'sounds/weapons/rocketfire1.wav';
    this.stopSoundSrc = "sounds/weapons/explode" + randomSound() + ".wav";;
    this.startSpriteSrc = 'textures/flash.png';
    this.startSpriteDiametr = 30;
    this.startSpriteDelay = 15;
    this.stopSpriteSrc = 'textures/explode.png';
    this.stopSpriteDiametr = 50;
    this.stopSpriteDelay = 100;

    function randomSound() { // рандомная-гавно-функция
        var number;
        number = parseInt(Math.random()*3);
        if(number == 0) return 3;
        if(number == 1) return 4;
        if(number == 2) return 5;

    }

}
