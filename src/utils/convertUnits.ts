// Utility functions for converting between metric and imperial units

// Converts Celsius to Fahrenheit
// Example: celsiusToFahrenheit(12) => 53.6
export const celsiusToFahrenheit = (celsius: number): number =>
  Math.round((celsius * 9) / 5 + 32)

// Converts m/s to mph
// Example: msToMph(5) => 11.2
export const msToMph = (ms: number): number =>
  Math.round(ms * 2.237)

