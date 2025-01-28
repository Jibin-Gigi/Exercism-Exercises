//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (band_colors) => {
  const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white' ];

  return parseInt(`${resistorColors.indexOf(band_colors[0])}${resistorColors.indexOf(band_colors[1])}`)
};
