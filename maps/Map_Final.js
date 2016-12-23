function Map_Final() {

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
    smallBox.appear(1500, 1600, 500, 600, 300);
    smallBox.appear(580, 680, 250, 350, 100);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);

    healthkit.appear(1175, 120);

    var john = new Human();
    john.appear(305, 400);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 100;
    b1.appear(850, 280);
    b1.attack(1000);
    b1.onlyMove(6);


    var b2 = new Bot_Human();
    b2.allweapons = ['pistol'];
    b2.hp = 100;
    b2.appear(550, 850);
    b2.attack(1000);
    b1.onlyMove(6);


    var boss = new Bot_Human();
    boss.allweapons = ['pistol'];
    boss.hp = 200;
    boss.angle = 270;
    boss.appear(1600, 600);
    boss.onlyMove(4, true);
    boss.attack(350);

    var bots = [b1, b2, boss];

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
                alert("Congrutulations!!!!!");
                new Map_Bonus();
            }, 1000);

        }

    }, 5000);

}