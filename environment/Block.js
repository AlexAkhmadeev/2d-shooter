function Block() {

	this.background = null;
	this.backgroundImage = "url(textures/stone2.jpg)";
	this.opacity = 1;

	this.appear = function(x1, x2, y1, y2) {

		var block = document.createElement('div');
		block.classList.add('block');
		block.classList.add('clip');
		block.classList.add('grid');
		block.classList.add('shadow');
		block.style.width = (x2 - x1) + "px";
		block.style.height = (y2 - y1) + "px";
		block.style.opacity = this.opacity;
		block.style.zIndex = "100";
		block.style.top = y1 + "px";
		block.style.left = x1 + "px";
		block.style.backgroundImage = this.backgroundImage;
		if (this.background) block.style.background = this.background;
		document.body.appendChild(block);

	}

}