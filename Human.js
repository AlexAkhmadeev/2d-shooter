function Human() {

	this.angle = 180; // начальный угол поворота
	this.hp = 100;
	this.id = 'player';

	document.querySelector('#HP').value = this.hp;

	var human = document.createElement('div');
	human.id = this.id;

	var self = this;



	this.offListeners = function() {

		window.removeEventListener('keydown', onkeydown);
		window.removeEventListener('keyup', onkeyup);
		window.removeEventListener('click', this.shoot );

		clearInterval(timerTop);
		clearInterval(timerBottom);
		clearInterval(timerLeft);
		clearInterval(timerRight);

	};

	human.properties = {
		offListeners : self.offListeners,
		alive : true,
		max_hp: this.hp, // максимальное кол-во HP
		weapons: ['pistol'], // оружия 'redlaser'
		current_weapon: 0, // используемое оружие (индекс из weapons)
		max_ap: 100, // максимум брони
		hp: this.hp, // hp в данный момент
		ap: 100, // брони в данный момент
		level: 1, // уровень
		damage_skill: 2 // коэффициент урона
	};

	var props = human.properties;

	human.classList.add('human');
	human.classList.add('alive');
	human.style.width = this.width + "px";
	human.style.height = this.height + "px";
	human.setAttribute("breakable", true);
	human.showhp = false;


	/**
	 * Респаун human`a
	 * @param coordX
	 * @param coordY
	 */
		this.appear = function(coordX, coordY) { // создает human`а на координатах coordsX, coordsY



		human.style.transform = "rotate(" +  this.angle + "deg)";
		human.style.top = coordY + "px";
		human.style.left = coordX + "px";
		document.body.appendChild(human);
		human.a_hint_render();

	};


	/**
	 * Выстрел
	 */
	this.shoot = function(event) {
		var button = event.which;
		var weapon = props.weapons[props.current_weapon];

		if(button == 1) {
			human.a_missile_shoot(weapon);
		}

	};



	/**            ОБРАБОТЧИКИ              */


	window.addEventListener('keydown', onkeydown);
	window.addEventListener('keyup', onkeyup);

	var timerTop, timerBottom, timerLeft, timerRight;
	var stateTop, stateBottom, stateLeft, stateRight;

	/**
	 * Управление движением
	 * @param event
	 */
	function onkeydown(event) {
		var keyCode = event.keyCode;

		if(props.hp == 0) return;



		if(keyCode == 82) {
			changeWeapon();
		}

		if(keyCode == 87) {
			if(stateTop == "In Progress") return;
			stateTop = "In Progress";
			timerTop = setInterval(function() {
				human.a_move('top', 10);
				animating();
			}, 40);
		}

		if(keyCode == 83)  {
			if(stateBottom == "In Progress") return;
			stateBottom = "In Progress";
			timerBottom = setInterval(function() {
				human.a_move('bottom', 10);
				animating();
			}, 40);
		}


		if(keyCode == 65) {
			if(stateLeft == "In Progress") return;
			stateLeft = "In Progress";
			timerLeft = setInterval(function() {
				human.a_move('left', 10);
				animating();
			}, 40);
		}

		if(keyCode == 68) {
			if(stateRight == "In Progress") return;
			stateRight = "In Progress";
			timerRight = setInterval(function() {
				human.a_move('right', 10);
				animating();
			}, 40);
		}

		if(keyCode == 81) human.a_rotate(true);
		if(keyCode == 69) human.a_rotate(false);
	}


	function onkeyup(event) {
		var keyCode = event.keyCode;

		if(keyCode == 87) {
			clearInterval(timerTop);
			stateTop = null;
		}
		if(keyCode == 83) {
			clearInterval(timerBottom);
			stateBottom = null;
		}
		if(keyCode == 65) {
			clearInterval(timerLeft);
			stateLeft = null;
		}
		if(keyCode == 68) {
			clearInterval(timerRight);
			stateRight = null;
		}
	}



	window.addEventListener('click', this.shoot );



	/** *********************************** */

	var currentImage = 0;
	var trigger = false;
	function animating() {

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

		human.style.backgroundImage = 'url(textures/human/human_' + currentImage + '.png)';

	}



	function changeWeapon() {
		var countWeapons = props.weapons.length;
		if (props.current_weapon == countWeapons - 1) {
			props.current_weapon = 0;
		} else {
			props.current_weapon++;
		}
		a_sound('sounds/weapons/scock1.wav');
		document.querySelector('#currentWeapon').src = "textures/weapons_sprites/" + props.weapons[props.current_weapon] + ".png";
	}


}
