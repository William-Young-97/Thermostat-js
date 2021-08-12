document.addEventListener('DOMContentLoaded', function(event) {
  const thermostat = new Thermostat
  window.onload = () => {
    document.getElementById("power-status").innerText = "On";
    document.getElementById("current-temperature").innerText = thermostat.degrees;
    document.getElementById("power-usage").innerText = thermostat.currentUsage();
  };

  document.getElementById("up").addEventListener("click", () => {
    thermostat.up();
    document.getElementById("current-temperature").innerText = thermostat.degrees;
    document.getElementById("power-usage").innerText = thermostat.currentUsage();
  });

  document.getElementById("down").addEventListener("click", () => {
    thermostat.down();
    document.getElementById("current-temperature").innerText = thermostat.degrees;
    document.getElementById("power-usage").innerText = thermostat.currentUsage();
  });

  document.getElementById("reset").addEventListener("click", () => {
    thermostat.reset();
    document.getElementById("current-temperature").innerText = thermostat.degrees;
    document.getElementById("power-usage").innerText = thermostat.currentUsage();
   });

  document.getElementById("powerOn").addEventListener("click", () => {
    thermostat.powerSaveOn();
    document.getElementById("power-status").innerText = "On";
   });
   
  document.getElementById("powerOff").addEventListener("click", () => {
    thermostat.powerSaveOff();
    document.getElementById("power-status").innerText = "Off";
  });

  //api stuff

document.querySelector('#select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#current-city').value;
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=25ef0e9ecc6623f749c73ab22074caf0&units=metric")
.then((response) => { return response.json()
})
.then((data) => {
  document.querySelector('#current-temperature').innerText = data.main.temp;
  });
 });
});