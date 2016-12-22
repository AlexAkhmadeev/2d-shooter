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

        var bot1 = new Bot_Human();
        bot1.allweapons = ['pistol'];
        bot1.hp = 150;
        bot1.appear(715, 380);
        bot1.attack(500);

        var bot2 = new Bot_Human();
        bot2.allweapons = ['pistol'];
        bot2.hp = 150;
        bot2.appear(715, 600);
        bot2.attack(500);

        var bot3 = new Bot_Human();
        bot3.allweapons = ['pistol'];
        bot3.hp = 100;
        bot3.angle = 180;
        bot3.appear(350, 150);
        bot3.attack(1000);

        var bot4 = new Bot_Human();
        bot4.allweapons = ['pistol'];
        bot4.hp = 150;
        bot4.appear(1450, 400);
        bot4.attack(1000);


        var bot5 = new Bot_Human();
        bot5.allweapons = ['pistol'];
        bot5.hp = 150;
        bot5.angle = 180;
        bot5.appear(1450, 550);
        bot5.attack(150);


}