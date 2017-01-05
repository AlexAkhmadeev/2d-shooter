function Map_Final() {
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
    smallBox.appear(1500, 1600, 500, 600, 3000);
    antitankbox.appear(1550, 550);
    smallBox.appear(580, 680, 250, 350, 100);

    block.appear(250, 1750 ,50, 75);
    block.appear(1725, 1750 ,50, 900);
    block.appear(250, 275 ,75, 900);
    block.appear(250, 1750 ,890, 915);

    healthkit.appear(1175, 120);
    healthkit.appear(1175, 520);

    var john = new Human();
    john.appear(305, 400);


    var boss = new Bot_Human();
    boss.allweapons = ['antitank'];
    boss.hp = 10000;
    boss.angle = 270;
    boss.appear(1600, 600);
    boss.onlyMove(3, true);
    boss.attack(1000);

    var boss2 = new Bot_Human();
    boss2.allweapons = ['pistol'];
    boss2.hp = 3000;
    boss2.appear(1100, 600);
    boss2.onlyMove(9, true);
    boss2.attack(600);

    var boss3 = new Bot_Human();
    boss3.allweapons = ['pistol'];
    boss3.hp = 3000;
    boss3.appear(600, 600);
    boss3.onlyMove(9, true);
    boss3.attack(600);

    var bots = [boss];

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
                    a_reload_level("bonus");
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */

    return {
        "timerId" : onWin
    };

}