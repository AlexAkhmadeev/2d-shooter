function Map_Final() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/stone3.jpg)';
    ground.style.backgroundSize = '200px 200px';

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


    var boss = new Bot_Human();
    boss.allweapons = ['antitank'];
    boss.hp = 10000;
    boss.angle = 270;
    boss.appear(1600, 600);
    boss.onlyMove(3, true);
    boss.attack(1000);

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