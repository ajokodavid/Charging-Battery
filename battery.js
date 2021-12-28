var percent = 0;
var percentage = document.querySelector("#percent");
var battery = document.querySelector('i');

var chargeBattery = function(){
    if(percent < 100) {
        percent++;
        battery.classList.toggle("fa-battery-full");
        percentage.innerHTML = `${percent}%`;
    }

    if(percent == 100) {
        battery.classList.add("fa-battery-full");
        percentage.innerHTML = `${percent}%`;
    }
}

setInterval(chargeBattery, 3000);