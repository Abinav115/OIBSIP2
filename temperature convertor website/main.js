const temperatureInput = document.querySelector('#temperature-input');
const unitSelect = document.querySelector('#unit-select');
const convertButton = document.querySelector('#convert-button');
const resultElement = document.querySelector('#result');

const convertTemperature = () => {
  const inputValue = parseFloat(temperatureInput.value);
  if (isNaN(inputValue)) {
    resultElement.style.display = 'none';
    return;
  }

  const unit = unitSelect.value;
  let convertedValue, convertedUnit;

  if (unit === 'celsius') {
    // Convert to Celsius
    convertedValue = inputValue;
    convertedUnit = 'Celsius';
  } else if (unit === 'fahrenheit') {
    // Convert to Fahrenheit
    convertedValue = (inputValue * 9/5) + 32;
    convertedUnit = 'Fahrenheit';
  } else if (unit === 'kelvin') {
    // Convert to Kelvin
    convertedValue = inputValue + 273.15;
    convertedUnit = 'Kelvin';
  }

  resultElement.textContent = `Converted Temperature: ${convertedValue.toFixed(2)} ${convertedUnit}`;
  resultElement.style.display = 'block';
};

convertButton.addEventListener('click', convertTemperature);
