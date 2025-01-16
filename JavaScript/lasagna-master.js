/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Returns the cooking status based on the remaining time on the timer in minutes.
 * @param {number} remainingTime - The remaining time in minutes.
 * @returns {string} - The cooking status.
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  if (remainingTime === 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
}

/**
 * Calculates the preparation time based on the number of layers and average preparation time per layer in minutes.
 * @param {Array} layers - The layers of the lasagna.
 * @param {number} [avgTime=2] - The average preparation time per layer in minutes
 * @returns {number} - The total preparation time.
 */
export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

/**
 * Calculates the quantities of noodles and sauce needed based on the layers.
 * @param {Array} layers - The layers of the lasagna.
 * @returns {Object} - An object with the quantities of noodles and sauce.
 */
export function quantities(layers) {
  let noodlesCount = 0;
  let sauceCount = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') noodlesCount++;
    if (layers[i] === 'sauce') sauceCount++;
  }
  return { noodles: noodlesCount * 50, sauce: sauceCount * 0.2 };
}

/**
 * Adds the secret ingredient from a friend's list to your list.
 * @param {Array} friendsList - The list of ingredients from a friend.
 * @param {Array} myList - Your list of ingredients.
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scales the recipe based on the number of portions.
 * @param {Object} recipe - The original recipe.
 * @param {number} noOfPortions - The number of portions.
 * @returns {Object} - The scaled recipe.
 */
export function scaleRecipe(recipe, noOfPortions) {
  let multiplier = noOfPortions / 2;
  let result = { ...recipe };
  for (let key in result) {
    result[key] *= multiplier;
  }
  return result;
}
