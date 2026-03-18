// Utility functions for converting between metric and imperial units

// Converts Celsius to Fahrenheit
// Example: celsiusToFahrenheit(12) => 53.6
export const celsiusToFahrenheit = (celsius: number): number =>
  Math.round((celsius * 9) / 5 + 32)

// Converts m/s to mph
// Example: msToMph(5) => 11.2
export const msToMph = (ms: number): number =>
  Math.round(ms * 2.237)

// Rounds temperature to nearest integer
// Example: roundTemp(14.92) => 15
export const roundTemp = (temp: number): number => Math.round(temp)

// Rounds wind speed to one decimal for display
// Example: roundWind(4.12) => 4.1
export const roundWind = (speed: number): number =>
  Math.round(speed * 10) / 10

