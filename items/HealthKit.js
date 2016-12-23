function HealthKit() {

    this.regeneratePower = 40;


    var healthkit;


    this.appear = function(coordX, coordY) {
        healthkit = document.createElement('div');

        healthkit.properties = {
            regenerate_power: this.regeneratePower
        };

        healthkit.classList.add('healthkit');
        healthkit.classList.add('clip');
        healthkit.classList.add('picked');
        healthkit.style.top = coordY - healthkit.offsetHeight/2 + "px";
        healthkit.style.left = coordX - healthkit.offsetWidth/2 + "px";
        document.body.appendChild(healthkit);
    }


}
