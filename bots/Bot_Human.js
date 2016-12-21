function Bot_Human() {

    this.width = 40;
    this.height = 40;
    this.angle = 270; // ��������� ���� ��������
    this.hp = 100;
    this.aim = document.querySelector('#player');
    this.allweapons = null;
    this.background = null;

    var bot = document.createElement('div');
    bot.classList.add('bot');
    bot.classList.add('alive');

    var props;

    bot.showhp = false;


    /**
     * ������� human`a
     * @param coordX
     * @param coordY
     */
    this.appear = function(coordX, coordY) {

        bot.properties = {
            max_hp: this.hp, // ������������ ���-�� HP
            weapons: ['pistol', 'antitank', 'firethrower'], // ������
            current_weapon: 0, // ������������ ������ (������ �� weapons)
            max_ap: 100, // �������� �����
            hp: this.hp, // hp � ������ ������
            ap: 100, // ����� � ������ ������
            level: 1, // �������
            damage_skill: 2 // ����������� �����
        };

        props = bot.properties;
        bot.style.backgroundImage = this.background ? this.background : 'url(textures/bots/bot_human_0.png)';
        bot.weapons = this.allweapons;
        bot.style.width = this.width + "px";
        bot.style.height = this.height + "px";
        bot.setAttribute("breakable", true);
        bot.totalhp = this.hp;
        bot.style.transform = "rotate(" +  this.angle + "deg)";
        bot.style.top = coordY + "px";
        bot.style.left = coordX + "px";
        document.body.appendChild(bot);
        bot.a_hint_render();
    };

    var attackTimer;
    this.attack = function(frequency) {

        if(props.hp == "0") {
            clearInterval(attackTimer);
            return;
        }
        //console.log("attack!");
         attackTimer = setInterval(function() {
            bot.a_missile_shoot(bot.weapons[0]);
        }, frequency);
    };

    var moveTimer, rotateTimer;
    this.move = function(rate, isRed) { // ����� ����������

            var currentDirection = "left";
            moveTimer = setInterval(function () {

                //console.log("move!");

                if(props.hp == "0") {
                    clearInterval(moveTimer);
                    clearInterval(rotateTimer);
                    return;
                }

                animating(isRed);

                if( bot.a_move(currentDirection, rate) ) {
                    currentDirection = randomDirection(currentDirection);
                }

            }, 40);

            rotateTimer = setInterval(function () {
             bot.a_rotate(function() {
                 var bool = [true, false];
                 return bool[parseInt(parseInt(Math.random() * 2))];
             });
                currentDirection = randomDirection(currentDirection);
            }, parseInt(1000 + Math.random() * 2000) );

        if(props.hp == "0") {
            clearInterval(moveTimer);
            clearInterval(rotateTimer);
        }


        function randomDirection(currentDirection) { // ���������� ���� �� 4 �����������, ����� ����, ��� ����
            var directions = ['top', 'bottom', 'left', 'right'];
            directions.splice(directions.indexOf(currentDirection), 1);
            return directions[parseInt(Math.random() * 3)];
        }

    };




    var currentImage = 0;
    var trigger = false;
    function animating(isRed) {

        if(!trigger) {
            currentImage++;
        } else {
            currentImage--;
        }

        if(currentImage == 4) {
            trigger = true;
        }

        if(currentImage == 0) {
            trigger = false;
        }

        bot.style.backgroundImage = 'url(textures/bots/' + (isRed ? 'red/' : '') + 'bot_human_' + currentImage + '.png)';

    }


    this.hunt = function() {
        var aim = this.aim;


    }



}
