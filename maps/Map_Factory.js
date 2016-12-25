function Map_Factory() {

    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/metal1.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // Статичный блок
    block.backgroundImage = 'url(textures/brick1.jpg)';
    var box = new BlockBreakable(); // Разбивающийся блок
    var smallBox = new BlockBreakable(); // Разбивающийся блок
    var healthkit = new HealthKit("hk"); // Аптечки
    var launcherbox = new Weaponbox('launcher'); // Новый weaponbox
    var laserbox = new Weaponbox('laser'); // Новый weaponbox
    var antitankbox = new Weaponbox('antitank'); // Новый weaponbox

    var box = new BlockBreakable();
    box.backgroundImage = 'url(textures/box1.jpg)';

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);
    block.appear(323, 350 ,698, 889);
    block.appear(274, 425 ,617, 646);
    block.appear(398, 425 ,644, 835);
    block.appear(473, 500 ,617, 889);
    block.appear(473, 500 ,185, 565);
    block.appear(498, 503 ,563, 619);
    block.appear(274, 350 ,293, 322);
    block.appear(398, 500 ,293, 322);
    block.appear(473, 500 ,77, 133);
    block.appear(498, 625 ,293, 322);
    block.appear(598, 625 ,131, 295);
    block.appear(798, 825 ,77, 835);
    block.appear(723, 750 ,482, 889);
    block.appear(623, 825 ,401, 430);
    block.appear(623, 650 ,428, 727);
    block.appear(598, 675 ,725, 754);
    block.appear(823, 975 ,806, 835);
    block.appear(998, 1050 ,563, 619);
    block.appear(973, 1000 ,806, 835);
    block.appear(1098, 1150 ,563, 619);
    block.appear(1148, 1250 ,806, 835);
    block.appear(973, 1000 ,563, 808);
    block.appear(1048, 1100 ,563, 835);
    block.appear(1148, 1175 ,563, 835);
    block.appear(823, 875 ,563, 619);
    block.appear(923, 1000 ,563, 619);
    block.appear(1298, 1325 ,563, 889);
    block.appear(1323, 1600 ,185, 214);
    block.appear(1573, 1600 ,212, 511);
    block.appear(1323, 1575 ,482, 511);
    block.appear(1323, 1350 ,266, 430);
    block.appear(1448, 1475 ,212, 322);
    block.appear(1323, 1328 ,212, 268);

    box.appear(973, 1075 ,131, 241, 400);
    box.appear(1348, 1400 ,401, 457, 400);
    box.appear(523, 600 ,428, 511, 400);
    box.appear(1448, 1550 ,617, 727, 400);


    // Стационарки
    var shooterTimer1 = setInterval(function() {
        a_missile_shoot('firethrower', 1110, 600, 'bottom');
    }, 700);


    var shooterTimer2 = setInterval(function() {
        a_missile_shoot('firethrower', 1015, 600, 'bottom');
    }, 700);


    laserbox.appear(420, 850);
    antitankbox.appear(1450, 350);

        var john = new Human();
        john.appear(275, 850);

        var b1 = new Bot_Human();
        b1.allweapons = ['launcher'];
        b1.hp = 950;
        b1.appear(715, 380);
        b1.attack(500);
        b1.onlyMove(5);

        var b2 = new Bot_Human();
        b2.allweapons = ['launcher'];
        b2.hp = 950;
        b2.appear(715, 600);
        b2.attack(500);
        b2.onlyMove(5);

        var b3 = new Bot_Human();
        b3.allweapons = ['launcher'];
        b3.hp = 1000;
        b3.angle = 180;
        b3.appear(350, 150);
        b3.attack(1000);
        b3.onlyMove(5);

        var b4 = new Bot_Human();
        b4.allweapons = ['pistol'];
        b4.hp = 1500;
        b4.appear(1450, 400);
        b4.attack(300);
        b4.onlyMove(7);

        var boss = new Bot_Human();
        boss.allweapons = ['laser'];
        boss.hp = 2500;
        boss.appear(1450, 550);
        boss.attack(800);
        boss.onlyMove(6, true);


    var bots = [b1, b2, b3, b4, boss];

    var onWin = setInterval(function() {

        for(var i = 0 ; i < bots.length; i++) {

            if(bots[i].currentHp() == 0 ) {
                bots.splice(i, 1);
            }

        }


        if(bots.length == 0) {
            john.offListeners();

            alert("You Win!!!");
            clearInterval(onWin);
            clearInterval(shooterTimer1);

            setTimeout(function() {
                a_remove_current_map();
                setTimeout(function () {
                    a_reload_level("storage");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** */

    /**
     * Возвращаем все id таймеров, которые хотим отменить при смене карты
     */
    return {
        "timerId" : onWin,
        "timerId2" : shooterTimer1,
        "timerId3" : shooterTimer2
    };


}