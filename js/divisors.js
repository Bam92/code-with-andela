/*
 * 
 */

function divisors(integer) {
  var divisorArr = [];
  for(let i = 0; i < integer - 1; i++) {
  if(i !== 1 && /*i !== integer && */ integer % i === 0) {
  
  divisorArr.push(i);

  }
  }
  return divisorArr;
}
