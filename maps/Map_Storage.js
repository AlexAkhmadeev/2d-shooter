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
    healthkit.appear(750, 750);
    healthkit.appear(450, 250);
    healthkit.appear(950, 750);

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
    block.appear(1423, 1525 ,401, 646);
    block.appear(648, 1300 ,806, 835);
    block.appear(648, 800 ,131, 268);

    var bot1 = new Bot_Human();
    bot1.allweapons = ['pistol'];
    bot1.hp = 1500;
    bot1.appear(900, 260);
    bot1.attack(1000);
    bot1.move(5);

    var bot2 = new Bot_Human();
    bot2.allweapons = ['launcher'];
    bot2.hp = 500;
    bot2.appear(1000, 80);
    bot2.attack(1500);
    bot2.move(3);

    var bot3 = new Bot_Human();
    bot3.allweapons = ['antitank'];
    bot3.hp = 500;
    bot3.appear(1600, 300);
    bot3.attack(1000);
    bot3.move(5);

    var bot4 = new Bot_Human();
    bot4.allweapons = ['laser'];
    bot4.hp = 500;
    bot4.appear(1400, 730);
    bot4.attack(700);
    bot4.move(5);

    var bot5 = new Bot_Human();
    bot5.allweapons = ['antitank'];
    bot5.hp = 1500;
    bot5.appear(1000, 600);
    bot5.attack(1000);
    bot5.move(5);

    var bot6 = new Bot_Human();
    bot6.allweapons = ['pistol'];
    bot6.hp = 1500;
    bot6.appear(1000, 260);
    bot6.attack(1000);
    bot6.move(5);

    var bot7 = new Bot_Human();
    bot7.allweapons = ['pistol'];
    bot7.hp = 1500;
    bot7.appear(900, 450);
    bot7.attack(200);
    bot7.move(5);

    var bot8 = new Bot_Human();
    bot8.allweapons = ['laser'];
    bot8.hp = 2000;
    bot8.appear(300, 800);
    bot8.attack(200);
    bot8.move(15);

    var boss = new Bot_Human();
    boss.backgroundImage = 'url(textures/bots/red/bot_human_0.png)';
    boss.allweapons = ['firethrower'];
    boss.hp = 10000;
    boss.appear(305, 210);
    boss.attack(2000);
    boss.move(10,true);


    //������
    antitankbox.appear(800, 200);
    laserbox.appear(300, 800);
    launcherbox.appear(800, 750);


}