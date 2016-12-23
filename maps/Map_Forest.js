function Map_Forest() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/grass1.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    block.backgroundImage = "url(textures/bush1.jpg)";
    var stone = new BlockBreakable(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    stone.backgroundImage = "url(textures/stone1.jpg)";
    var smallBox = new BlockBreakable(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    var healthkit = new HealthKit("hk"); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅ

    var launcherbox = new Weaponbox('launcher'); // пїЅпїЅпїЅпїЅпїЅ weaponbox
    var laserbox = new Weaponbox('laser'); // пїЅпїЅпїЅпїЅпїЅ weaponbox
    var antitankbox = new Weaponbox('antitank'); // пїЅпїЅпїЅпїЅпїЅ weaponbox

    //пїЅпїЅпїЅпїЅпїЅпїЅпїЅ
    healthkit.appear(1100, 700);
    healthkit.appear(700, 700);
    healthkit.appear(1550, 835);

    //пїЅпїЅпїЅпїЅпїЅ
    block.appear(250, 1750, 50, 75);
    block.appear(1725, 1750, 50, 900);
    block.appear(250, 275, 75, 900);
    block.appear(250, 1750, 875, 900);

    block.appear(364, 392, 76, 250);
    block.appear(276, 479, 311, 335);
    block.appear(480, 506, 244, 401);
    block.appear(480, 504, 75, 169);
    block.appear(586, 611, 75, 399);
    block.appear(1584, 1723, 436, 460);
    block.appear(1584, 1604, 459, 499);
    block.appear(1585, 1604, 517, 560);
    block.appear(1585, 1664, 561, 577);
    block.appear(795, 840, 386, 400);
    block.appear(1463, 1517, 392, 402);
    block.appear(407, 1596, 629, 644);
    block.appear(969, 989, 644, 733);
    block.appear(402, 1596, 731, 749);
    block.appear(401, 1723, 805, 820);
    block.appear(720, 747, 540, 589);
    block.appear(1181, 1209, 439, 488);
    block.appear(1596, 1665, 629, 644);
    block.appear(1648, 1665, 642, 747);

    //пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ
    smallBox.backgroundImage = "url(textures/box2.jpg)";
    smallBox.appear(1400, 1500, 650, 750, 200);
    smallBox.appear(300, 400, 350, 450, 200);
    smallBox.appear(1673, 1725 ,563, 619, 50);


    // пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ
    //stone.appear(700, 900, 450, 650, 1000);

    launcherbox.appear(1650, 825);


    // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ
    var john = new Human();
    john.appear(305, 110);

    var b1 = new Bot_Human();
    b1.allweapons = ['pistol'];
    b1.hp = 100;
    b1.appear(1300, 350);
    b1.attack(500);
    b1.onlyMove(6);

    var b2 = new Bot_Human();
    b2.allweapons = ['launcher'];
    b2.hp = 200;
    b2.appear(1500, 320);
    b2.attack(1200);
    b2.onlyMove(8);

    var b3 = new Bot_Human();
    b3.allweapons = ['launcher'];
    b3.hp = 200;
    b3.appear(1300, 320);
    b3.attack(1200);
    b3.onlyMove(8);

    var b4 = new Bot_Human();
    b4.allweapons = ['pistol'];
    b4.hp = 250;
    b4.angle = 270;
    b4.appear(1650, 485);
    b4.attack(1200);


    var boss = new Bot_Human();
    boss.allweapons = ['launcher'];
    boss.hp = 1000;
    boss.appear(900, 450);
    boss.attack(700);
    boss.onlyMove(6, true);

    /** Changemap */
    var bots = [b1, b2, b3, b4, boss];

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
                    new Map_Building();
                }, 1000);

            }, 3000);

        }

    }, 2000);
    /** ****************** */


}
