document.addEventListener('DOMContentLoaded', function(event) {
  const thermostat = new Thermostat
  window.onload = () => {
    document.getElementById("power-status").innerText = "On";
    document.getElementById("current-temperature").innerText = thermostat.degrees;
    document.getElementById("power-usage").innerText = thermostat.currentUsage();
    let city = document.getElementById('current-city').value;
    document.getElementById("API-temp").innerText = `The temperature in ${city} is: `;  
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

document.getElementById('select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  let city = document.getElementById('current-city').value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then((response) => { return response.json()
})
.then((data) => {
  document.getElementById("API-temp").innerText = `The temperature in ${city} is: ${data.main.temp}`;
  });
 });
});