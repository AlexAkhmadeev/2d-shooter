/**
 * ф-я для логгирования
 * @param value
 */
Object.prototype.a_log = function(value) {
    console.log("log: " + value);
};

/**
 * Функция, для определения угла наклона (возвращает градусы)
 * @param elementId
 * @returns {number}
 */
Object.prototype.a_getDegreeElementById = function() {
    var element = this;
    var style = getComputedStyle(element, null);
    // получаем значение стилей
    var valueStyle = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform");
    // если стилей нет, то угол 0 градусов
    if(valueStyle == 'none') return 0;
    var values = valueStyle.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    // получаем синус и косинус
    var cos = values[0];
    var sin = values[1];
    // вычисляем угол
    var degree = Math.round(Math.asin(sin) * (180/Math.PI));
    if(cos<0){
        addDegree = 90 - Math.round(Math.asin(sin) * (180/Math.PI));
        degree = 90 + addDegree;
    }
    if(degree < 0){
        degree = 360 + degree;
    }
    return degree;
};

/**
 *
 * @param direction - направление движения : top, bottom, left, right
 * @param step - смещение в пикселях
 * @returns {HTMLElement} - возвращает элемент, в который врезались, иначе null
 */
Object.prototype.a_move = function(direction, step) {

        var moveTarget = this; // перемещаемый элемент
        var coords = moveTarget.getBoundingClientRect(); // объект с координатами перемащаемого элемента
        var height = moveTarget.offsetHeight; // высота перемащаемого элемента
        var width = moveTarget.offsetWidth; // ширина перемащаемого элемента
        var centerX = coords.left + moveTarget.offsetWidth/2; // центр перемащаемого элемента по оси Y
        var centerY = coords.top + moveTarget.offsetHeight/2; // центр перемащаемого элемента по оси Y

        var x, y, x1, x2, x3, y1, y2, y3; // координаты ...
        var barrier; // препятствие, если есть

        switch (direction) {
            case 'top' :

                x1 = coords.left + 1;
                x2 = centerX;
                x3 = coords.right - 1;

                y = coords.top;

                for (var i = 0; i < step; i++) { // проверяем наличие других элементов на step пикселей вперед

                    barrier = (document.elementFromPoint(x1, y - i).classList.contains('clip') ? document.elementFromPoint(x1, y - i) : null
                    || document.elementFromPoint(x2, y - i).classList.contains('clip') ? document.elementFromPoint(x2, y - i) : null
                    || document.elementFromPoint(x3, y - i).classList.contains('clip') ? document.elementFromPoint(x3, y - i) : null);
                    if (barrier) { // если на пути препятствие, останавливаемся перед препятствием...
                        moveTarget.style.top = y - i + 'px';
                        barrier.a_take(moveTarget);
                        return barrier; // ... и возвращаем его для дальнейшей обработки
                    }
                }

                moveTarget.style.top = y - step + 'px';
                return null;


            break;
            case "bottom":

                x1 = coords.left + 1;
                x2 = centerX;
                x3 = coords.right - 1;

                y = coords.bottom;

                for(var i = 0; i < step; i ++ ) { // проверяем наличие других элементов на step пикселей вперед

                    barrier = (document.elementFromPoint(x1, y + i).classList.contains('clip') ? document.elementFromPoint(x1, y + i) : null
                    || document.elementFromPoint(x2, y + i).classList.contains('clip') ? document.elementFromPoint(x2, y + i) : null
                    || document.elementFromPoint(x3, y + i).classList.contains('clip') ? document.elementFromPoint(x3, y + i) : null);
                    if(barrier) { // если на пути препятствие, останавливаемся перед препятствием...
                        moveTarget.style.top = y + i - height + 'px';
                        barrier.a_take(moveTarget);
                        return barrier; // ... и возвращаем его для дальнейшей обработки
                    }
                }

                moveTarget.style.top = y + step - height + 'px';
                return null;

            break;
            case "left":

                x = coords.left;

                y1 = coords.top + 1;
                y2 = centerY;
                y3 = coords.bottom - 1;

                for(var i = 0; i < step; i ++ ) { // проверяем наличие других элементов на step пикселей вперед

                    barrier = (document.elementFromPoint(x - i, y1).classList.contains('clip') ? document.elementFromPoint(x - i, y1) : null
                    || document.elementFromPoint(x - i, y2).classList.contains('clip') ? document.elementFromPoint(x - i, y2) : null
                    || document.elementFromPoint(x - i, y3).classList.contains('clip') ? document.elementFromPoint(x - i, y3) : null);
                    if(barrier) { // если на пути препятствие, останавливаемся перед препятствием...
                        moveTarget.style.left = x - i + 'px';
                        barrier.a_take(moveTarget);
                        return barrier; // ... и возвращаем его для дальнейшей обработки
                    }
                }

                moveTarget.style.left = x - step + 'px';
                return null;

            break;
            case "right":

                x = coords.right;

                y1 = coords.top + 1;
                y2 = centerY;
                y3 = coords.bottom - 1;

                for(var i = 0; i < step; i ++ ) { // проверяем наличие других элементов на step пикселей вперед

              barrier = (document.elementFromPoint(x + i, y1).classList.contains('clip') ? document.elementFromPoint(x + i, y1) : null
                    || document.elementFromPoint(x + i, y2).classList.contains('clip') ? document.elementFromPoint(x + i, y2) : null
                    || document.elementFromPoint(x + i, y3).classList.contains('clip') ? document.elementFromPoint(x + i, y3) : null);
                    if(barrier) { // если на пути препятствие, останавливаемся перед препятствием...
                        moveTarget.style.left = x + i - width + 'px';
                        barrier.a_take(moveTarget);
                        return barrier; // ... и возвращаем его для дальнейшей обработки
                    }
                }

                moveTarget.style.left = x + step - width + 'px';
                return null;

                break;
            default:
            throw new Error('Некорректно указано направление движения');
        }



};
/**
 * Подобрать что-либо
 * @param taker
 */
Object.prototype.a_take = function(taker) {
    var takeElement = this;
    if(taker.classList.contains('bot')) return;
    takeElement.a_take_healthkit(taker); // подобрать аптечку
    takeElement.a_take_weapon(taker); // подобрать оружие
};


/**
 * Взять аптечку
 * @param taker
 */
Object.prototype.a_take_healthkit = function(taker) {
    var takeElement = this;

    if( !takeElement.classList.contains('healthkit') ) return;
    var newHealth = taker.properties.hp +  takeElement.properties.regenerate_power;
    var hpinput = document.querySelector('#HP');

    var totalHealth = (newHealth > taker.properties.max_hp) ? taker.properties.max_hp : newHealth;
    taker.properties.hp = totalHealth;

    document.body.removeChild(takeElement);

    if(!taker.classList.contains('human')) return;

    hpinput.value = totalHealth;
    hpinput.style.backgroundColor = '#88F';
    setTimeout(function () {
        hpinput.style.backgroundColor = '#FFF';
    }, 200);
    a_sound('sounds/items/smallmedkit1.wav');
};


/**
 * Подобрать оружие
 * @param taker
 */
Object.prototype.a_take_weapon = function(taker) {
    var takeElement = this;
    if( !takeElement.classList.contains('weaponbox') ) return;

    if( taker.properties.weapons.indexOf(takeElement.weaponName) == -1) {
        taker.properties.weapons.push(takeElement.weaponName);
    }

    document.body.removeChild(takeElement);
    a_sound('sounds/weapons/scock1.wav');
};


/**
 * Ф-я для поворота эл-та с шагом 90 градусов
 * @param isClockwise, если true - то по часовой стрелке, false - против часовой
 */
Object.prototype.a_rotate =	function(isClockwise) {
    var turn = this.a_getDegreeElementById();

    if(!isClockwise) {
        turn+=90;
    } else {
        turn-=90;
    }

    this.style.transform = "rotate(" +  turn + "deg)";
};

/**
 * Ф-я для расчета урона
 */
Object.prototype.a_damage_calc = function(damage_skill, damage) {

    if(!damage_skill) damage_skill = 1;
    var dispersion = 0.3; // Разброс
    return damage*damage_skill + parseInt(damage*damage_skill*dispersion - (Math.random()*2*damage*damage_skill*dispersion));

};


/**
 * Ф-я нанесения повреждений
 * @param damage
 */
Object.prototype.a_hurt = function(damage_skill, damage) {
    var element = this;
    var props = element.properties;

    damage = a_damage_calc(damage_skill, damage);

    if( !element.hasAttribute("breakable") ) return;
    var newStrength = props.hp - damage;

    if(newStrength < 0) { newStrength = 0 };

    if( element.classList.contains('human') ) {
        var hpinput = document.querySelector('#HP');
        hpinput.value = newStrength;
        hpinput.style.backgroundColor = '#F33';
        setTimeout(function () {
            hpinput.style.backgroundColor = '#FFF';
        }, 200);
    }

    props.hp = newStrength;

    element.style["-webkit-filter"] = "brightness(2)";
    setTimeout(function () {
        element.style["-webkit-filter"] = "brightness(1)";
    }, 80);

    if( newStrength <= 0) {
        props.hp = 0;
        if(element.classList.contains('human') ) {
            props.offListeners();
            alert("You lose!!!");
                a_bot_kill();
            setTimeout(function () {
                a_remove_current_map();
                a_reload_level();
            }, 2000)
        }
        document.body.removeChild(element);
    } else {
        element.a_hint(newStrength, damage);
    }

};

/**
 * Флэш (спрайт при выстреле)
 * @param coordX
 * @param coordY
 * @param diametr
 * @param delay
 */
Object.prototype.a_flash = function(src, delay, diametr, coordX, coordY) {

    if(!src) return;

    var sprite = document.createElement('div');
    sprite.style.backgroundSize = '100% 100%';
    sprite.style.position = 'absolute';
    newSize(diametr);
    sprite.style.backgroundImage = 'url(' + src + ')';
    document.body.appendChild(sprite);

    setTimeout(function () {
        document.body.removeChild(sprite);
    }, delay);

    function newSize(diametr) {
        sprite.style.width = diametr + "px";
        sprite.style.height = diametr + "px";
        sprite.style.top = (coordY - diametr/2) + "px";
        sprite.style.left = (coordX - diametr/2) + "px";
    }

};

/**
 * Спрайт
 * @param coordX
 * @param coordY
 * @param diametr
 * @param delay
 */
Object.prototype.a_sprite = function(src, delay, diametr, coordX, coordY) {

    if(!src) return;

    var sprite = document.createElement('div');
    sprite.style.backgroundSize = '100% 100%';
    sprite.style.position = 'absolute';
    newSize(diametr);
    sprite.style.backgroundImage = 'url(' + src + ')';
    document.body.appendChild(sprite);

    setTimeout(function () {
        newSize(diametr*1.5);
    }, delay/3);
    setTimeout(function () {
        newSize(diametr*2);
    }, delay/2);
    setTimeout(function () {
        newSize(diametr*2.5);
    }, delay/1.5);

    setTimeout(function () {
        document.body.removeChild(sprite);
    }, delay);

    function newSize(diametr) {
        sprite.style.width = diametr + "px";
        sprite.style.height = diametr + "px";
        sprite.style.top = (coordY - diametr/2) + "px";
        sprite.style.left = (coordX - diametr/2) + "px";
    }

}

/**
 * Выстрел орудия снарядного типа (пуля, ракета, ... )
 * @param coordX
 * @param coordY
 * @param direction
 *
 *
 */
Object.prototype.a_missile_shoot = function(missileType, coordX, coordY, direction) {
   try {

    var shooter = this; // стрелок
    if(missileType != 'pistol' && missileType != 'launcher' && missileType != 'laser' && missileType != 'firethrower' && missileType != 'antitank' && missileType != 'redlaser') return;


    var missile;
    if(missileType == 'pistol') {
        missile = new Pistol();
    }

    if(missileType == 'launcher') {
        missile = new Launcher();
    }

    if(missileType == 'laser') {
        missile = new Laser();
    }

    if(missileType == 'firethrower') {
        missile = new FireThrower();
    }

    if(missileType == 'antitank') {
        missile = new AntiTank();
    }

    if(missileType == 'redlaser') {
        missile = new RedLaser();
    }

        var shell = document.createElement('div'); // создаем новый снаряд
        shell.style.position = 'absolute';
        shell.style.backgroundSize = '100% 100%';
        shell.style.width = missile.a_width + 'px';
        shell.style.height = missile.a_height + 'px';
        shell.style.backgroundImage = 'url(' + missile.src + ')';

    //получение начальной позиции снаряда, если не задано
    if( !coordX && !coordY && !direction ) {
        var newHeight, newWidth = null;
        if (shooter.a_getDegreeElementById() == 0) {
            newWidth = shell.style.width = missile.a_height + 'px';
            newHeight = shell.style.height = missile.a_width + 'px';
            coordX = shooter.getBoundingClientRect().left + shooter.offsetWidth / 2 - parseInt(newWidth)/2;
            coordY = shooter.getBoundingClientRect().top - parseInt(newHeight);
            direction = "top";
        }
        if (shooter.a_getDegreeElementById() == 90) {
            coordX = shooter.getBoundingClientRect().right;
            coordY = shooter.getBoundingClientRect().top + shooter.offsetHeight / 2 - missile.a_height/2;
            direction = "right";
        }
        if (shooter.a_getDegreeElementById() == 180) {
            newWidth = shell.style.width = missile.a_height + 'px';
            newHeight = shell.style.height = missile.a_width + 'px';
            coordX = shooter.getBoundingClientRect().left + shooter.offsetWidth / 2 - parseInt(newWidth)/2;
            coordY = shooter.getBoundingClientRect().bottom;
            direction = "bottom";
        }
        if (shooter.a_getDegreeElementById() == 270) {
            coordX = shooter.getBoundingClientRect().left - missile.a_width;
            coordY = shooter.getBoundingClientRect().top + shooter.offsetHeight / 2 - missile.a_height/2;
            shell.style.transform = 'rotate(' + (shooter.a_getDegreeElementById() - 90) + 'deg)';
            direction = "left";
        }

        a_flash(missile.startSpriteSrc, missile.startSpriteDelay, missile.startSpriteDiametr, shooter.getBoundingClientRect().left + shooter.offsetWidth/2, shooter.getBoundingClientRect().top + shooter.offsetHeight/2);

    }

    shell.style.top = coordY + "px";
    shell.style.left = coordX + "px";
    //shell.style.transform = 'rotate(' + (shooter.a_getDegreeElementById() - 90) + 'deg)';
    document.body.appendChild(shell);


    a_sound(missile.startSoundSrc);

    var timerTop, timerBottom, timerLeft, timerRight;
    var shellCoords;

        if (direction == "bottom") {
            timerBottom = setInterval(function () {
                shellCoords = shell.getBoundingClientRect();
                if (document.elementFromPoint(coordX, shellCoords.bottom + 2).classList.contains('clip') || document.elementFromPoint(coordX, shellCoords.bottom + 2).classList.contains('alive')  ) {
                    document.elementFromPoint(coordX, shellCoords.bottom + 2).a_hit(shooter, missile, shell, shellCoords.left + shell.offsetWidth / 2, shellCoords.bottom);
                    clearInterval(timerBottom);
                    setTimeout(function () {
                        document.body.removeChild(shell);
                    }, 100)
                }
                shell.style.top = shellCoords.top + missile.a_step + "px";
            }, 5);
        }

        if (direction == "top") {
            timerTop = setInterval(function () {
                shellCoords = shell.getBoundingClientRect();
                if (document.elementFromPoint(coordX, shellCoords.top - 2).classList.contains('clip') || document.elementFromPoint(coordX, shellCoords.top - 2).classList.contains('alive')) {
                    document.elementFromPoint(coordX, shellCoords.top - 2).a_hit(shooter, missile, shell, shellCoords.left + shell.offsetWidth / 2, shellCoords.top);
                    clearInterval(timerTop);
                    setTimeout(function () {
                        document.body.removeChild(shell);
                    }, 100)
                }
                shell.style.top = shellCoords.top - missile.a_step + "px";
            }, 5);
        }

        if (direction == "left") {
            timerLeft = setInterval(function () {
                shellCoords = shell.getBoundingClientRect();
                if (document.elementFromPoint(shellCoords.left - 2, coordY).classList.contains('clip') || document.elementFromPoint(shellCoords.left - 2, coordY).classList.contains('alive')) {
                    document.elementFromPoint(shellCoords.left - 2, coordY).a_hit(shooter, missile, shell, shellCoords.left, shellCoords.top + shell.offsetHeight / 2);
                    clearInterval(timerLeft);
                    setTimeout(function () {
                        document.body.removeChild(shell);
                    }, 100)
                }
                shell.style.left = shellCoords.left - missile.a_step + "px";
                /**
                 setTimeout(function () {
                if(shell)  document.body.removeChild(shell);
                clearInterval(timerLeft);
            }, 4000)
                 */
            }, 5);
        }

        if (direction == "right") {
            timerRight = setInterval(function () {
                shellCoords = shell.getBoundingClientRect();
                if (document.elementFromPoint(shellCoords.right + 2, coordY).classList.contains('clip') || document.elementFromPoint(shellCoords.right + 2, coordY).classList.contains('alive')) {
                    clearInterval(timerRight);
                    document.elementFromPoint(shellCoords.right + 2, coordY).a_hit(shooter, missile, shell, shellCoords.right, shellCoords.top + shell.offsetHeight / 2); // попадание
                    setTimeout(function () {
                        document.body.removeChild(shell);
                    }, 100)
                }
                shell.style.left = shellCoords.left + missile.a_step + "px";
            }, 5);
        }

    } catch(err) {

        //console.log(err.message);
        clearInterval(timerRight);
        clearInterval(timerLeft);
        clearInterval(timerTop);
        clearInterval(timerBottom);

    }


    if( this.className == 'human' ) {
        event.preventDefault();
    }
};

/**
 * Попадание
 * @param missile - объект со свойствами снаряда
 * @param shell - текщий снаряд
 */
Object.prototype.a_hit = function(shooter, missile, shell, sptiteX, spriteY) {
    var hittable = this;

    console.log(shooter);

    if(shooter != window) {
        if (shooter.classList.contains('bot') && hittable.classList.contains('bot')) return; // Friendly Fire Off
    }

    if(hittable.classList.contains('alive') ) { a_sprite('textures/blood.png', 100, 30, sptiteX, spriteY) }
    a_sprite(missile.stopSpriteSrc, missile.stopSpriteDelay, missile.stopSpriteDiametr, sptiteX, spriteY);

    if(shooter != window) {
        hittable.a_hurt(shooter.properties.damage_skill, missile.damage);
    } else {
        hittable.a_hurt(1, missile.damage);
    }

    a_sound(missile.stopSoundSrc);
};

/**
 * Воспроизведение звука
 * @param src
 */
Object.prototype.a_sound = function(src) {
    if(!src) return;
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = src;
    audio.defaultPlaybackRate = 0.5;
    audio.play();
};


/**
 * Ф-я показывает оставшееся количество HP
*/
Object.prototype.a_hint = function(strength, damage) {

        var element = this; // Игрок, бот, ящик
        var props = element.properties;

        var hint = document.createElement('div');
        hint.classList.add('hint');
        hint.innerHTML = "<b>" + damage + "<b>";
        hint.style.top = element.getBoundingClientRect().top - 25 + 'px';
        hint.style.left = element.getBoundingClientRect().left + element.offsetWidth/2 - 25 + 'px';
        document.body.appendChild(hint);

        var timer = setInterval(function() {
            hint.style.top = hint.getBoundingClientRect().top - 3 + 'px';
            hint.style.opacity = getComputedStyle(hint).opacity - 0.02;
        }, 20);

        setTimeout(function () {
            document.body.removeChild(hint);
            clearInterval(timer);
        }, 1000);

    //
    function renderHint() {
        props.showHpString.style.display = "block";
    }

    function removeHint() {
        props.showHpString.style.display = "none";
    }

    clearTimeout(props.hintTimerId);

    renderHint();

    props.hintTimerId = setTimeout(removeHint, 2000);

};



/**
 * Отрисовка всплывающей строки HP
 */
Object.prototype.a_hint_render = function() {

    var element = this;
    var strength = element.properties.hp;
    var totalHp = element.properties.max_hp;

    element.properties.showHpString = document.createElement('div');
    element.properties.showHpString.classList.add('showhp');
    element.properties.showHpString.style.top = element.getBoundingClientRect().top - 30 + 'px';
    element.properties.showHpString.style.left = element.getBoundingClientRect().left + element.offsetWidth / 2 - 50 + 'px';
    element.properties.showHpString.style.zIndex = '9999';

    var curHp = document.createElement('div');
    curHp.classList.add('showhpinside');
    curHp.style.height = '100%';
    curHp.style.width = (strength/totalHp)*100 + '%';

    element.properties.showHpString.appendChild(curHp);

    document.body.appendChild(element.properties.showHpString);

    element.properties.showHpString.style.display = "none";

    var moveHPTimer = setInterval(function () {
        if(!element.properties.showHpString) {
            clearInterval(moveHPTimer);
            return;
        }
        var strength = element.properties.hp;
        var totalHp = element.properties.max_hp;
        element.properties.showHpString.style.top = element.getBoundingClientRect().top - 30 + 'px';
        element.properties.showHpString.style.left = element.getBoundingClientRect().left + element.offsetWidth / 2 - 50 + 'px';
        curHp.style.width = (strength/totalHp)*100 + '%';
    }, 30);

};



/**
 * Смена уровня
 */
Object.prototype.a_remove_current_map = function() {

    var lastDiv = document.querySelector("#lastElement");

    while(lastDiv.nextElementSibling) {
        document.body.removeChild(lastDiv.nextElementSibling);
    }

    clearInterval(a_map_timer_id.timerId);

};


/**
 * Убрать ботов
 */
Object.prototype.a_bot_kill = function() {

    var bots = document.querySelectorAll(".bot");

    for(var i = 0 ; i < bots.length; i++ ) {

        bots[i].properties.hp = 0;
        document.body.removeChild(bots[i]);
    }

};


/**
 * Убрать ботов
 */
Object.prototype.a_new_map = function() {

    var bots = document.querySelectorAll(".bot");

    for(var i = 0 ; i < bots.length; i++ ) {

        bots[i].properties.hp = 0;
        document.body.removeChild(bots[i]);
    }

};



/**
 * Текущая карта
 * @type {null}
 */
Object.prototype.a_current_map = null;
Object.prototype.a_map_timer_id = null;

/**
 * Новый уровень
 */
Object.prototype.a_reload_level = function(id) {

    if(id) a_current_map = id;

    if(a_current_map == "forest") {
        a_map_timer_id = new Map_Forest();
    }

    if(a_current_map == "storage") {
        a_map_timer_id = new Map_Storage();
    }

    if(a_current_map == "building") {
        a_map_timer_id = new Map_Building();
    }

    if(a_current_map == "factory") {
        a_map_timer_id = new Map_Factory();
    }

    if(a_current_map == "mansion") {
        a_map_timer_id = new Map_Mansion();
    }

    if(a_current_map == "area") {
        a_map_timer_id = new Map_Area();
    }

    if(a_current_map == "first") {
        a_map_timer_id = new Map_First();
    }

    if(a_current_map == "final") {
        a_map_timer_id = new Map_Final();
    }

    if(a_current_map == "bonus") {
        a_map_timer_id = new Map_Bonus();
    }
    
};

/**
 * Стандартные действия при победе
 */
