function Map_Factory() {

    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/tile1.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // Статичный блок
    block.backgroundImage = 'url(textures/wood1.jpg)';
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
    block.appear(398, 425 ,401, 565);
    block.appear(748, 775 ,131, 403);
    block.appear(773, 1075 ,131, 160);
    block.appear(1048, 1075 ,158, 754);
    block.appear(748, 1050 ,725, 754);
    block.appear(973, 1000 ,212, 754);
    block.appear(898, 925 ,212, 754);
    block.appear(1123, 1150 ,77, 835);
    block.appear(1023, 1050 ,752, 808);
    block.appear(1023, 1050 ,833, 889);
    block.appear(1323, 1575 ,293, 322);
    block.appear(1323, 1575 ,671, 700);
    block.appear(1548, 1575 ,347, 646);
    block.appear(1198, 1700 ,131, 160);
    block.appear(1198, 1225 ,158, 484);

        var john = new Human();
        john.appear(350, 500);

        var b1 = new Bot_Human();
        b1.allweapons = ['pistol'];
        b1.hp = 150;
        b1.appear(715, 380);
        b1.attack(500);
        b1.onlyMove(5);

        var b2 = new Bot_Human();
        b2.allweapons = ['pistol'];
        b2.hp = 150;
        b2.appear(715, 600);
        b2.attack(500);
        b2.onlyMove(5);

        var b3 = new Bot_Human();
        b3.allweapons = ['launcher'];
        b3.hp = 100;
        b3.angle = 180;
        b3.appear(350, 150);
        b3.attack(1000);
        b3.onlyMove(5);

        var b4 = new Bot_Human();
        b4.allweapons = ['pistol'];
        b4.hp = 150;
        b4.appear(1450, 400);
        b4.attack(1000);
        b4.onlyMove(5);

        var boss = new Bot_Human();
        boss.allweapons = ['laser'];
        boss.hp = 150;
        boss.angle = 180;
        boss.appear(1450, 550);
        boss.attack(4000);
        boss.onlyMove(6, true);


    var bots = [b1, b2, b3, b4, boss];

    var onWin = setInterval(function() {

        for(var i = 0 ; i < bots.length; i++) {

            if(bots[i].currentHp() == 0 ) {
                bots.splice(i, 1);
            }

        }

        a_log(bots.length);

        if(bots.length == 0) {
            alert("You Win!!!");
            clearInterval(onWin);

            john.offListeners();
            a_remove_current_map();

            setTimeout(function() {
                new Map_Storage();
            }, 1000);

        }

    }, 5000);


}