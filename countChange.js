/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function countChange (money,coins, numCoins) {
  // use recursion here
  if(numCoins === undefined) numCoins = coins.length; // helps us avoid too much recursion error
  if(money === 0) return 1;
  if(money < 0) return 0;
  if(numCoins <= 0 && money > 0) return 0;
 
  return countChange(money, coins, numCoins -1) + countChange(money - coins[numCoins - 1], coins, numCoins);
}