function Map_Building() {


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

    var bot1 = new Bot_Human();
    bot1.allweapons = ['pistol'];
    bot1.hp = 100;
    bot1.appear(1165, 650);
    bot1.attack(700);

    var bot2 = new Bot_Human();
    bot2.allweapons = ['launcher'];
    bot2.hp = 250;
    bot2.appear(1665, 650);
    bot2.attack(1000);
    bot2.angle = 270;
    bot2.move(10);

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
    bot4.move(5);

    var bot5 = new Bot_Human();
    bot5.allweapons = ['pistol'];
    bot5.hp = 150;
    bot5.angle = 180;
    bot5.appear(1450, 550);
    bot5.attack(150);
    bot5.move(5);

    antitankbox.appear(350, 100);

}