function BlockBreakable() {

    this.state = null;
    this.background = "#66F";
    this.backgroundImage = "url(textures/box1.jpg)";

}


BlockBreakable.prototype.appear = function(x1, x2, y1, y2, strength) {

    var block = document.createElement('div');

    block.properties = {
        max_hp: strength, // максимальное кол-во HP
        hp: strength // hp в данный момент
    };

    block.classList.add('block');
    block.setAttribute("breakable", true);
    block.showhp = false;
    block.classList.add('shadow');
    block.classList.add('clip');
    block.style.background = this.background;
    block.style.backgroundImage = this.backgroundImage;
    block.style.backgroundSize = "100% 100%";
    block.style.width = (x2 - x1) + "px";
    block.style.height = (y2 - y1) + "px";
    block.style.top = y1 + "px";
    block.style.left = x1 + "px";
    document.body.appendChild(block);
    block.a_hint_render();


};

