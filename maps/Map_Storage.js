function Map_Storage() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/wood4.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // ��������� ����
    block.backgroundImage = 'url(textures/wood1.jpg)';
    var box = new BlockBreakable(); // ������������� ����
    var smallBox = new BlockBreakable(); // ������������� ����
    var healthkit = new HealthKit("hk"); // �������
    var launcherbox = new Weaponbox('launcher'); // ����� weaponbox
    var laserbox = new Weaponbox('laser'); // ����� weaponbox
    var antitankbox = new Weaponbox('antitank'); // ����� weaponbox

    // ��������� ������
    var john = new Human();
    john.appear(305, 110);

    /**
    //�����
    block.appear(350, 400, 100, 200);
    block.appear(900, 950, 500, 650);

    //�����
    box.appear(850, 1000, 200, 350, 100);
    box.appear(700, 850, 500, 650, 100);
    box.appear(1000, 1150, 600, 750, 100);
    box.appear(1200, 1350, 600, 750, 100);

    //��������� �����
    smallBox.backgroundImage = "url(textures/box2.jpg)";
    smallBox.appear(1400, 1500, 650, 750, 50);
    smallBox.appear(300, 400, 350, 450, 50);

    //�������
    healthkit.appear(1350, 200);
*/
    healthkit.appear(350, 250);
    healthkit.appear(750, 600);
    healthkit.appear(450, 250);
    healthkit.appear(950, 600);
    healthkit.appear(1550, 210);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);

    //block.appear(348, 375 ,77, 133);
    block.appear(274, 375 ,293, 322);
    block.appear(348, 375 ,212, 295);
    block.appear(648, 1300 ,320, 349);
    block.appear(1273, 1300 ,347, 754);
    block.appear(648, 675 ,347, 754);
    block.appear(673, 1125 ,725, 754);
    block.appear(1173, 1275 ,725, 754);
    block.appear(1098, 1125 ,536, 727);
    block.appear(723, 750 ,401, 565);
    block.appear(748, 1125 ,401, 430);
    block.appear(873, 900 ,563, 700);
    block.appear(873, 900 ,698, 754);
    block.appear(798, 1050 ,536, 565);
    block.appear(973, 1000 ,428, 484);
    block.appear(1173, 1200 ,401, 754);
    block.appear(1648, 1675 ,77, 376);
    block.appear(1623, 1650 ,455, 727);
    block.appear(1473, 1625 ,698, 727);
    block.appear(1473, 1650 ,779, 808);
    block.appear(1473, 1500 ,806, 889);
    block.appear(348, 475 ,752, 835);
    block.appear(398, 425 ,455, 835);
    block.appear(348, 600 ,455, 484);
    block.appear(473, 500 ,698, 835);
    block.appear(448, 475 ,131, 214);
    block.appear(998, 1025 ,131, 160);
    block.appear(1023, 1050 ,158, 187);
    block.appear(1048, 1075 ,185, 214);
    block.appear(1073, 1100 ,212, 241);
    block.appear(1098, 1125 ,239, 268);
    block.appear(1123, 1150 ,212, 241);
    block.appear(1148, 1175 ,185, 214);
    block.appear(1173, 1200 ,158, 187);
    block.appear(1198, 1225 ,131, 160);
    block.appear(1423, 1675 ,131, 160);
    block.appear(1423, 1450 ,158, 187);
    block.appear(1498, 1525 ,212, 268);
    block.appear(1573, 1600 ,158, 187);
    block.appear(1423, 1675 ,266, 295);
    block.appear(648, 1300 ,806, 835);
    block.appear(648, 800 ,131, 268);
    block.appear(348, 375 ,77, 160);
    block.appear(1423, 1525 ,401, 430);
    block.appear(1498, 1525 ,428, 619);
    block.appear(1423, 1500 ,590, 619);
    block.appear(1423, 1450 ,482, 538);
    block.appear(1523, 1550 ,401, 619);
    block.appear(598, 675 ,617, 673);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 1500;
    b1.appear(900, 260);
    b1.attack(1000);
    b1.onlyMove(5);

    var b2 = new Bot_Human();
    b2.allweapons = ['launcher'];
    b2.hp = 500;
    b2.appear(1000, 80);
    b2.attack(1500);
    b2.onlyMove(3);

    var b3 = new Bot_Human();
    b3.allweapons = ['antitank'];
    b3.hp = 500;
    b3.appear(1600, 300);
    b3.attack(1000);
    b3.onlyMove(5);

    var b4 = new Bot_Human();
    b4.allweapons = ['laser'];
    b4.hp = 500;
    b4.appear(1400, 730);
    b4.attack(700);
    b4.onlyMove(5);

    var b5 = new Bot_Human();
    b5.allweapons = ['antitank'];
    b5.hp = 2500;
    b5.appear(1000, 600);
    b5.attack(1000);
    b5.onlyMove(5);

    var b6 = new Bot_Human();
    b6.allweapons = ['pistol'];
    b6.hp = 1500;
    b6.appear(1000, 260);
    b6.attack(1000);
    b6.onlyMove(5);

    var b8 = new Bot_Human();
    b8.allweapons = ['laser'];
    b8.hp = 2000;
    b8.appear(300, 800);
    b8.attack(600);
    b8.onlyMove(10);

    var boss = new Bot_Human();
    boss.backgroundImage = 'url(textures/bots/red/bot_human_0.png)';
    boss.allweapons = ['antitank'];
    boss.hp = 4000;
    boss.appear(1650, 700);
    boss.attack(2000);
    boss.onlyMove(7,true);


    //������
    antitankbox.appear(1600, 850);
    laserbox.appear(300, 850);
    launcherbox.appear(290, 200);

    var bots = [b1, b2, b3, b4, b5, b6, b8, boss];

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
                    a_reload_level("final");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */

    return {
        "timerId" : onWin
    };

}