function Weaponbox(weaponName) {

    this.weaponName = weaponName;

    this.appear = function(coordX, coordY) {

        if(!weaponName) return;

        var weaponbox = document.createElement('div');
        weaponbox.classList.add('weaponbox');
        weaponbox.classList.add('clip');
        weaponbox.classList.add('picked');
        weaponbox.weaponName = this.weaponName;
        weaponbox.style.backgroundImage = "url(textures/weapons_sprites/" + this.weaponName + ".png)";
        weaponbox.style.top = coordY - weaponbox.offsetHeight/2 + "px";
        weaponbox.style.left = coordX - weaponbox.offsetWidth/2 + "px";
        document.body.appendChild(weaponbox);
    };


}