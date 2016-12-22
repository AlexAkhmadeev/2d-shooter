function Map_Mansion() {


var block = new Block(); // Статичный блок
block.backgroundImage = 'url(textures/wood1.jpg)';
var box = new BlockBreakable(); // Разбивающийся блок
var smallBox = new BlockBreakable(); // Разбивающийся блок
var healthkit = new HealthKit("hk"); // Аптечки
var launcherbox = new Weaponbox('launcher'); // Новый weaponbox
var laserbox = new Weaponbox('laser'); // Новый weaponbox
var antitankbox = new Weaponbox('antitank'); // Новый weaponbox
block.appear(250, 1750 ,50, 75);
block.appear(1725, 1750 ,50, 900);
block.appear(250, 275 ,75, 900);
block.appear(250, 1750 ,890, 915);
block.appear(373, 400 ,77, 403);
block.appear(373, 400 ,833, 889);
block.appear(673, 775 ,401, 511);
block.appear(1023, 1600 ,158, 187);
block.appear(1573, 1600 ,185, 781);
block.appear(1023, 1050 ,185, 430);
block.appear(1023, 1050 ,482, 754);
block.appear(1048, 1600 ,779, 808);
block.appear(1023, 1050 ,752, 808);
block.appear(1048, 1150 ,374, 403);
block.appear(1198, 1300 ,374, 403);
block.appear(1298, 1325 ,185, 403);
block.appear(1048, 1150 ,509, 538);
block.appear(1198, 1325 ,509, 538);
block.appear(1298, 1325 ,536, 646);
block.appear(1298, 1325 ,698, 808);
block.appear(1598, 1650 ,293, 349);
block.appear(1623, 1675 ,590, 646);
block.appear(848, 925 ,806, 889);
block.appear(623, 725 ,158, 187);
block.appear(623, 650 ,185, 295);
block.appear(723, 750 ,158, 268);
block.appear(698, 750 ,266, 295);
block.appear(398, 525 ,509, 538);
block.appear(673, 700 ,644, 727);
block.appear(1448, 1475 ,185, 403);
block.appear(1523, 1600 ,374, 403);
block.appear(1473, 1525 ,293, 322);
block.appear(473, 500 ,77, 133);
block.appear(548, 575 ,77, 133);
block.appear(373, 400 ,509, 727);
block.appear(323, 450 ,725, 754);
block.appear(323, 450 ,806, 835);





}