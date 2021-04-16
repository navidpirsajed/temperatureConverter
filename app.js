const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

var resultDisplay = document.getElementById("resultDisplay");
document.getElementById("submit").addEventListener("click", function () {
  let degree = document.getElementById("degreeInputField").value;
  let unitType = document.getElementById("unitType").value;
  if (unitType === "C") {
    document.getElementById("resultDisplay").innerHTML = celsiusToFahrenheit(
      degree
    );
    // console.log(degree + " " + unitType);
  } else if (unitType === "F") {
    document.getElementById("resultDisplay").innerHTML = fahrenheitToCelsius(
      degree
    );
  }
});
