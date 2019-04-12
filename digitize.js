/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function digitize(n) {
 /* let output = []; // create an empty array
  // convert n to string
  let stringN = n.toString();
  
  for(let i, len = stringN.length; i < len; i++) output.push(+stringN.charAt(i));
  
  return output;*/
  return String(n).split('').map(Number);
}
console.log(digitize(8675309));
