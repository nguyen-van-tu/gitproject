const Battery = function() {
    this.setEnergy = function(energy) {
        this.energy = energy;
    };

    this.getEnergy = function() {
        return this.energy;
    };

    this.decreaseEnergy = function() {
        if (this.energy > 0) {
            this.energy--;
        }
    };
};


const FlashLamp = function() {
    this.setBattery = function(battery) {
        this.battery = battery;
    };

    this.getBateryInfo = function() {
        return this.battery.getEnergy();
    };

    this.light = function() {
        if(this.status) {
            alert("Lighting");
        } else {
            alert("Not light")
        }
    };

    this.turnOn = function() {
        this.status = true;
    };

    this.turnOff = function() {
        this.status = false;
    };
}

let battey = new Battery();

battey.setEnergy(100);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battey);

document.write(`Battery info: ${flashLamp.getBateryInfo()};`)
flashLamp.light();

document.write("Turn on <br>");
flashLamp.turnOn();
flashLamp.light();
document.write(`Battery info: ${flashLamp.getBateryInfo()};`)

document.write("Turn off <br>");
flashLamp.turnOff();
flashLamp.light();