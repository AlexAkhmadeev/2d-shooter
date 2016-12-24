function Map_Mansion() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/grass1.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // Статичный блок
    block.backgroundImage = 'url(textures/stone1.jpg)';
    var box = new BlockBreakable(); // Разбивающийся блок
    var smallBox = new BlockBreakable(); // Разбивающийся блок
    var healthkit = new HealthKit("hk"); // Аптечки
    var launcherbox = new Weaponbox('launcher'); // Новый weaponbox
    var laserbox = new Weaponbox('laser'); // Новый weaponbox
    var antitankbox = new Weaponbox('antitank'); // Новый weaponbox


    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);
    block.appear(373, 400 ,77, 403);
    block.appear(373, 400 ,833, 889);
    block.appear(673, 775 ,401, 511);
    block.appear(1023, 1600 ,158, 187);
    block.appear(1573, 1600 ,185, 781);
    block.appear(1023, 1050 ,185, 430);
    block.appear(1023, 1050 ,482, 754);
    block.appear(1048, 1600 ,779, 808);
    block.appear(1023, 1050 ,752, 808);
    block.appear(1048, 1150 ,374, 403);
    block.appear(1198, 1300 ,374, 403);
    block.appear(1298, 1325 ,185, 403);
    block.appear(1048, 1150 ,509, 538);
    block.appear(1198, 1325 ,509, 538);
    block.appear(1298, 1325 ,536, 646);
    block.appear(1298, 1325 ,698, 808);
    block.appear(1598, 1650 ,293, 349);
    block.appear(1623, 1675 ,590, 646);
    block.appear(848, 925 ,806, 889);
    block.appear(623, 725 ,158, 187);
    block.appear(623, 650 ,185, 295);
    block.appear(723, 750 ,158, 268);
    block.appear(698, 750 ,266, 295);
    block.appear(398, 525 ,509, 538);
    block.appear(673, 700 ,644, 727);
    block.appear(1448, 1475 ,185, 403);
    block.appear(1523, 1600 ,374, 403);
    block.appear(1473, 1525 ,293, 322);
    block.appear(473, 500 ,77, 133);
    block.appear(548, 575 ,77, 133);
    block.appear(373, 400 ,509, 727);
    block.appear(323, 450 ,725, 754);
    block.appear(323, 450 ,806, 835);

    laserbox.appear(1500, 225);
    launcherbox.appear(660, 220);
    healthkit.appear(1100, 300);
    healthkit.appear(1550, 835);

    var john = new Human();
    john.appear(300, 150);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 400;
    b1.appear(715, 380);
    b1.attack(300);
    b1.onlyMove(5);

    var b2 = new Bot_Human();
    b2.allweapons = ['pistol'];
    b2.hp = 400;
    b2.appear(715, 600);
    b2.attack(300);
    b2.onlyMove(5);

    var b3 = new Bot_Human();
    b3.allweapons = ['launcher'];
    b3.hp = 400;
    b3.angle = 180;
    b3.appear(550, 150);
    b3.attack(1000);
    b3.onlyMove(5);

    var b4 = new Bot_Human();
    b4.allweapons = ['launcher'];
    b4.hp = 400;
    b4.appear(1450, 400);
    b4.attack(1000);
    b4.onlyMove(5);

    var b5 = new Bot_Human();
    b5.allweapons = ['pistol'];
    b5.hp = 600;
    b5.angle = 180;
    b5.appear(1450, 550);
    b5.attack(150);
    b5.onlyMove(5);

    var boss = new Bot_Human();
    boss.allweapons = ['laser'];
    boss.hp = 1500;
    boss.appear(1450, 550);
    boss.attack(300);
    boss.onlyMove(8, true);

    
    var bots = [b1, b2, b3, b4, b5, boss]

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

            setTimeout(function() {
                a_remove_current_map();
                setTimeout(function () {
                    a_reload_level("factory");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */

    return {
        "timerId" : onWin
    };

}