function Map_Building() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/concrete1.jpg)';
    ground.style.backgroundSize = '100px 100px';

    var block = new Block(); // ��������� ����
    block.backgroundImage = 'url(textures/stone1.jpg)';
    var box = new BlockBreakable(); // ������������� ����
    var smallBox = new BlockBreakable(); // ������������� ����
    var healthkit = new HealthKit("hk"); // �������
    var launcherbox = new Weaponbox('launcher'); // ����� weaponbox
    var laserbox = new Weaponbox('laser'); // ����� weaponbox
    var antitankbox = new Weaponbox('antitank'); // ����� weaponbox

    // ��������� ������
    var john = new Human();
    john.appear(300, 800);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);
    block.appear(823, 850 ,77, 160);
    block.appear(823, 850 ,239, 349);
    block.appear(1298, 1600 ,293, 322);
    block.appear(1573, 1600 ,320, 403);
    block.appear(1573, 1600 ,428, 619);
    block.appear(1573, 1600 ,644, 754);
    block.appear(1448, 1575 ,725, 754);
    block.appear(1273, 1400 ,725, 754);
    block.appear(1273, 1300 ,293, 511);
    block.appear(1273, 1300 ,563, 808);
    block.appear(1348, 1375 ,374, 673);
    block.appear(1098, 1125 ,590, 646);
    block.appear(1098, 1125 ,671, 727);
    block.appear(373, 400 ,779, 889);
    block.appear(473, 675 ,347, 376);
    block.appear(473, 500 ,374, 592);
    block.appear(498, 675 ,563, 592);
    block.appear(1298, 1375 ,482, 511);
    block.appear(823, 850 ,671, 754);
    block.appear(848, 900 ,725, 754);
    block.appear(323, 500 ,752, 781);
    block.appear(1298, 1525 ,293, 322);
    block.appear(1573, 1600 ,158, 322);
    block.appear(1498, 1525 ,131, 295);
    block.appear(1648, 1675 ,77, 322);
    block.appear(1348, 1375 ,833, 889);
    block.appear(1573, 1600 ,833, 889);
    block.appear(648, 675 ,590, 889);
    block.appear(548, 575 ,698, 835);
    block.appear(274, 575 ,671, 700);
    block.appear(274, 425 ,563, 592);
    block.appear(348, 375 ,482, 592);
    block.appear(373, 425 ,482, 511);
    block.appear(348, 375 ,401, 511);
    block.appear(373, 425 ,401, 430);
    block.appear(348, 375 ,320, 430);
    block.appear(373, 425 ,320, 349);
    block.appear(473, 500 ,266, 376);
    block.appear(398, 425 ,266, 322);
    block.appear(1123, 1225 ,590, 619);
    block.appear(1123, 1150 ,698, 727);
    block.appear(1173, 1300 ,698, 727);

    var shooterTimer1 = setInterval(function() {
        a_missile_shoot('firethrower', 450, 75, 'bottom');
    }, 1500);



    launcherbox.appear(1680, 100);
    healthkit.appear(1100, 300);
    healthkit.appear(1550, 835);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 900;
    b1.appear(1165, 650);
    b1.attack(600);

    var b2 = new Bot_Human();
    b2.allweapons = ['launcher'];
    b2.hp = 250;
    b2.appear(1665, 650);
    b2.attack(1000);
    b2.angle = 270;
    b2.onlyMove(10);

    var b3 = new Bot_Human();
    b3.allweapons = ['launcher'];
    b3.hp = 600;
    b3.appear(350, 150);
    b3.attack(600);
    b3.onlyMove(10);

    var b4 = new Bot_Human();
    b4.allweapons = ['pistol'];
    b4.hp = 350;
    b4.appear(1450, 400);
    b4.attack(1000);
    b4.onlyMove(5);

    var b5 = new Bot_Human();
    b5.allweapons = ['pistol'];
    b5.hp = 650;
    b5.angle = 180;
    b5.appear(1450, 550);
    b5.attack(600);
    b5.onlyMove(5);

    var boss = new Bot_Human();
    boss.allweapons = ['laser'];
    boss.hp = 1000;
    boss.angle = 180;
    boss.appear(1450, 550);
    boss.attack(1000);
    boss.onlyMove(4, true);



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
            clearInterval(shooterTimer1);


            setTimeout(function() {
                a_remove_current_map();
                setTimeout(function () {
                    a_reload_level("mansion");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */

    return {
        "timerId" : onWin,
        "timerId2" : shooterTimer1
    };

}