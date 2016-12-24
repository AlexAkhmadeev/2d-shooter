function Map_Area() {

    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/tile1.jpg)';
    ground.style.backgroundSize = '100px 100px';

    var block = new Block(); // ��������� ����
    block.backgroundImage = 'url(textures/wood1.jpg)';
    var box = new BlockBreakable(); // ������������� ����
    var smallBox = new BlockBreakable(); // ������������� ����
    var healthkit = new HealthKit("hk"); // �������
    var launcherbox = new Weaponbox('launcher'); // ����� weaponbox
    var laserbox = new Weaponbox('laser'); // ����� weaponbox
    var antitankbox = new Weaponbox('antitank'); // ����� weaponbox

    var smallBox = new BlockBreakable();
    smallBox.backgroundImage = "url(textures/box2.jpg)";
    smallBox.appear(1400, 1500, 500, 600, 300);
    smallBox.appear(280, 380, 250, 350, 100);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);


    block.appear(1423, 1450 ,617, 889);
    block.appear(1448, 1675 ,617, 646);
    block.appear(773, 800 ,212, 295);
    block.appear(998, 1025 ,806, 889);
    block.appear(1223, 1250 ,77, 160);
    block.appear(373, 400 ,320, 646);
    block.appear(274, 375 ,617, 646);
    block.appear(498, 525 ,806, 889);
    block.appear(1598, 1725 ,455, 484);
    block.appear(1473, 1550 ,455, 484);
    block.appear(1523, 1550 ,374, 457);
    block.appear(1598, 1625 ,374, 484);
    block.appear(1423, 1475 ,158, 484);
    block.appear(1473, 1725 ,158, 187);
    block.appear(1673, 1725 ,320, 349);


    healthkit.appear(1675, 120);
    launcherbox.appear(1675, 420)

    var john = new Human();
    john.appear(305, 400);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 100;
    b1.angle = 180;
    b1.appear(850, 280);
    b1.attack(1000);


    var b2 = new Bot_Human();
    b2.allweapons = ['pistol'];
    b2.hp = 100;
    b2.angle = 0;
    b2.appear(550, 850);
    b2.attack(1000);


    var b3 = new Bot_Human();
    b3.allweapons = ['pistol'];
    b3.hp = 100;
    b3.angle = 0;
    b3.appear(1075, 850);
    b3.attack(700);


    var b4 = new Bot_Human();
    b4.allweapons = ['pistol'];
    b4.hp = 100;
    b4.angle = 270;
    b4.appear(1550, 120);
    b4.attack(700);


    var b5 = new Bot_Human();
    b5.allweapons = ['pistol'];
    b5.hp = 100;
    b5.angle = 270;
    b5.appear(1600, 300);
    b5.onlyMove(6);
    b5.attack(1000);


    var boss = new Bot_Human();
    boss.allweapons = ['launcher'];
    boss.hp = 200;
    boss.angle = 270;
    boss.appear(1600, 800);
    boss.onlyMove(4, true);
    boss.attack(1500);


    /** Changemap */
    var bots = [b1, b2, b3, b4, b5, boss];


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
                    a_reload_level("forest");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */

    return {
        "timerId" : onWin
    };
}