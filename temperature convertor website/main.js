const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const roundToTwoDP = num => num.toFixed(2);

const convertTemperature = (input, output1, output2, conversionFunction) => {
  input.addEventListener('input', () => {
    const inputValue = parseFloat(input.value);
    const [result1, result2] = conversionFunction(inputValue);
    output1.value = roundToTwoDP(result1);
    output2.value = roundToTwoDP(result2);
  });
};

const celsiusToFahrenheitAndKelvin = celsius => [
  celsius * 1.8 + 32,
  celsius + 273.15
];

const fahrenheitToCelsiusAndKelvin = fahrenheit => [
  (fahrenheit - 32) * (5 / 9),
  (fahrenheit + 459.67) * (5 / 9)
];

const kelvinToCelsiusAndFahrenheit = kelvin => [
  kelvin - 273,
  1.8 * (kelvin - 273) + 32
];

convertTemperature(celsiusInput, fahrenheitInput, kelvinInput, celsiusToFahrenheitAndKelvin);
convertTemperature(fahrenheitInput, celsiusInput, kelvinInput, fahrenheitToCelsiusAndKelvin);
convertTemperature(kelvinInput, celsiusInput, fahrenheitInput, kelvinToCelsiusAndFahrenheit);
