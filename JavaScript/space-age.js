//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  return parseFloat((age/orbitalPeriod[planet]/31557600).toFixed(2));
};

const orbitalPeriod = {
  mercury  : 0.2408467,
  venus	   : 0.61519726,
  earth	   : 1.0,
  mars	   : 1.8808158,
  jupiter  : 11.862615,
  saturn   : 29.447498,
  uranus   : 84.016846,
  neptune  : 164.79132
};
