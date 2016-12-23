function Map_Forest() {
    var ground = document.querySelector('.playzone');
    ground.style.backgroundImage = 'url(textures/grass1.jpg)';
    ground.style.backgroundSize = '200px 200px';

    var block = new Block(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    block.backgroundImage = "url(textures/wood1.jpg)";
    var stone = new BlockBreakable(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    stone.backgroundImage = "url(textures/stone1.jpg)";
    var smallBox = new BlockBreakable(); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
    var healthkit = new HealthKit("hk"); // пїЅпїЅпїЅпїЅпїЅпїЅпїЅ

    var launcherbox = new Weaponbox('launcher'); // пїЅпїЅпїЅпїЅпїЅ weaponbox
    var laserbox = new Weaponbox('laser'); // пїЅпїЅпїЅпїЅпїЅ weaponbox
    var antitankbox = new Weaponbox('antitank'); // пїЅпїЅпїЅпїЅпїЅ weaponbox

    //пїЅпїЅпїЅпїЅпїЅпїЅпїЅ
    healthkit.appear(1350, 200);
    healthkit.appear(550, 600);

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
    block.appear(816, 1492, 205, 207);
    block.appear(815, 818, 206, 395);
    block.appear(1487, 1490, 207, 397);
    block.appear(795, 840, 386, 400);
    block.appear(1463, 1517, 392, 402);
    block.appear(407, 1596, 629, 644);
    block.appear(969, 989, 644, 733);
    block.appear(402, 1596, 731, 749);
    block.appear(401, 1723, 805, 820);
    block.appear(720, 747, 540, 589);dedsa
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

    launcherbox.appear(405, 110);

    // пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ
    var john = new Human();
    john.appear(305, 110);

    var boss = new Bot_Human();
    boss.allweapons = ['laser'];
    boss.hp = 1000;
    boss.appear(900, 450);
    boss.attack(700);
    boss.hunt();
    boss.onlyMove(6, true);




    /**
    var bot6 = new Bot_Human();
    bot6.allweapons = ['laser'];
    bot6.hp = 1000;
    bot6.appear(1000, 260);
    bot6.attack(500);
    bot6.move(10);
    */



}
