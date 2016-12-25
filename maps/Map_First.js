function Map_First() {

    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/wood4.jpg)';
    ground.style.backgroundSize = '100px 100px';

    var block = new Block(); // ��������� ����
    block.backgroundImage = 'url(textures/stone2.jpg)';
    var box = new BlockBreakable(); // ������������� ����
    var smallBox = new BlockBreakable(); // ������������� ����
    var healthkit = new HealthKit("hk"); // �������
    var launcherbox = new Weaponbox('launcher'); // ����� weaponbox
    var laserbox = new Weaponbox('laser'); // ����� weaponbox
    var antitankbox = new Weaponbox('antitank'); // ����� weaponbox

    var smallBox = new BlockBreakable();
    smallBox.backgroundImage = "url(textures/box2.jpg)";
    smallBox.appear(1500, 1600, 500, 600, 200);
    smallBox.appear(580, 680, 250, 350, 100);

    var box = new BlockBreakable();
    box.backgroundImage = "url(textures/box1.jpg)";
    box.appear(748, 925 ,563, 727, 300);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);

    block.appear(274, 475 ,509, 538);
    block.appear(274, 500 ,293, 322);
    block.appear(473, 500 ,320, 376);
    block.appear(473, 500 ,455, 538);
    block.appear(573, 600 ,374, 457);


    healthkit.appear(1175, 120);

    var john = new Human();
    john.appear(305, 400);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 100;
    b1.appear(850, 280);
    b1.attack(1200);
    b1.onlyMove(6);


    var b2 = new Bot_Human();
    b2.allweapons = ['pistol'];
    b2.hp = 100;
    b2.appear(550, 850);
    b2.attack(1200);
    b2.onlyMove(6);


    var boss = new Bot_Human();
    boss.allweapons = ['pistol'];
    boss.hp = 200;
    boss.angle = 270;
    boss.appear(1600, 600);
    boss.onlyMove(4, true);
    boss.attack(500);

    var bots = [b1, b2, boss];

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
                    a_reload_level("area");
                }, 1000);

            }, 3000);

        }

    }, 2000);

    return {
        "timerId" : onWin
    };

}