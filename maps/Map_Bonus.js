function Map_Bonus() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/grandj1.jpg)';
    ground.style.backgroundSize = '100px 100px';

    var block = new Block(); // ��������� ����
    block.backgroundImage = 'url(textures/wood1.jpg)';
    var box = new BlockBreakable(); // ������������� ����
    var smallBox = new BlockBreakable(); // ������������� ����
    var healthkit = new HealthKit("hk"); // �������
    var launcherbox = new Weaponbox('launcher'); // ����� weaponbox
    var laserbox = new Weaponbox('laser'); // ����� weaponbox
    var antitankbox = new Weaponbox('antitank'); // ����� weaponbox
    var redlaserbox = new Weaponbox('redlaser'); // ����� weaponbox

    var smallBox = new BlockBreakable();
    smallBox.backgroundImage = "url(textures/box2.jpg)";
    smallBox.appear(1500, 1600, 500, 600, 300);
    smallBox.appear(580, 680, 250, 350, 100);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);


    var john = new Human();
    john.appear(305, 400);

    redlaserbox.appear(350, 500);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 100;
    b1.appear(850, 280);
    b1.move(15);

    var b2 = new Bot_Human();
    b2.allweapons = ['pistol'];
    b2.hp = 100;
    b2.appear(550, 850);
    b2.move(15);

    var b3 = new Bot_Human();
    b3.allweapons = ['pistol'];
    b3.hp = 100;
    b3.appear(450, 650);
    b3.move(15);

    var b4 = new Bot_Human();
    b4.allweapons = ['pistol'];
    b4.hp = 100;
    b4.appear(350, 250);
    b4.move(15);

    var b5 = new Bot_Human();
    b5.allweapons = ['pistol'];
    b5.hp = 100;
    b5.appear(350, 250);
    b5.move(15);

    var b6 = new Bot_Human();
    b6.allweapons = ['pistol'];
    b6.hp = 100;
    b6.appear(350, 250);
    b6.move(15);

    var b7 = new Bot_Human();
    b7.allweapons = ['pistol'];
    b7.hp = 100;
    b7.appear(350, 250);
    b7.move(15);

    var b8 = new Bot_Human();
    b8.allweapons = ['pistol'];
    b8.hp = 100;
    b8.appear(350, 250);
    b8.move(15);

    var b9 = new Bot_Human();
    b9.allweapons = ['pistol'];
    b9.hp = 100;
    b9.appear(350, 250);
    b9.move(15);

    var b10 = new Bot_Human();
    b10.allweapons = ['pistol'];
    b10.hp = 100;
    b10.appear(350, 250);
    b10.move(15);

    var b11 = new Bot_Human();
    b11.allweapons = ['pistol'];
    b11.hp = 100;
    b11.appear(350, 250);
    b11.move(15);

    var b12 = new Bot_Human();
    b12.allweapons = ['pistol'];
    b12.hp = 100;
    b12.appear(350, 250);
    b12.move(15);


    var boss = new Bot_Human();
    boss.allweapons = ['pistol'];
    boss.hp = 20000;
    boss.appear(1600, 600);
    boss.move(20, true);



}