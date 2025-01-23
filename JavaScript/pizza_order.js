/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    if (pizza === 'Margherita') return 7;
    if (pizza === 'Caprese') return 9;
    return 10;
  }
  let [first, ...remaining] = extras; 
  if (first === 'ExtraSauce') {
    return 1 + pizzaPrice(pizza, ...remaining);
  }
  return 2 + pizzaPrice(pizza, ...remaining);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice(order.pizza, ...order.extras)
  }, 0);
}


/*
global.d.ts

type Pizza = 'Margherita' | 'Caprese' | 'Formaggio';
type Extra = 'ExtraSauce' | 'ExtraToppings';
type PizzaOrder = { pizza: Pizza; extras: Extra[] };

*/
