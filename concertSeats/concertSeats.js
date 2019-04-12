/*
 * Concert Seat
 *
 * @author Abel L
 */

/*function test() {
var ar = [
    [7, 2, 6, 2, 5, 1],
    [8, 4, 7, 3, 6, 2],
    [9, 8, 7, 3, 1, 4]
];
var ar2 = [];
var ar3 = [];

// outer loop applies to outer array
for (var i=0, len=ar.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=ar[i].length; j<len2; j++) {
      if( i <= 0 ) continue;
        
        if ( ar[i][j] < ar[i - 1][j] ) {
          
          ar2.push(ar[i - 1][j]);
          if(ar2.length > 0) return false;
           //else if(ar2.length === 0) return true + ar2.length;
        //console.log( ar[i][j] + ' est sup a ' + ar[i - 1][j] + frontStage );
        
          
      } else if( ar[i][j] > ar[i - 1][j] ){
         ar3.push(ar[i][j]);
          if(ar3.length > 0) return true; 
      }
    
}}
}
console.log('the status is [' + test() + ']');*/

const form = document.querySelector('form');

form.addEventListener("submit", function(event) {
   
   // variables
   let row1 = document.getElementsByClassName('r1'),
       row1Arr = [];
   let row2 = document.getElementsByClassName('r2'),
       row2Arr = [];
   let row3 = document.getElementsByClassName('r3'),
       row3Arr = [];
   let row4 = document.getElementsByClassName('r4'),
       row4Arr = [];
   let row5 = document.getElementsByClassName('r5'),
       row5Arr = [];
   let row6 = document.getElementsByClassName('r6'),
       row6Arr = [];
   
   let multidimArr = []; // array of arrays
   
   // loops 
   /**
   * @TODO: refactor: create a function
   */
   for(let i = 0; i < row1.length; i++) {
      row1Arr.push(Number(row1[i].value));
      
   }
   
   for(let i = 0; i < row2.length; i++) {
      row2Arr.push(Number(row2[i].value));
      
   }
   for(let i = 0; i < row3.length; i++) {
      row3Arr.push(Number(row3[i].value));
   }
   for(let i = 0; i < row4.length; i++) {
      row4Arr.push(Number(row4[i].value));
   }
   for(let i = 0; i < row5.length; i++) {
      row5Arr.push(Number(row5[i].value));
   }
   for(let i = 0; i < row6.length; i++) {
      row6Arr.push(Number(row6[i].value));
   }
   
   multidimArr.push(row1Arr, row2Arr, row3Arr, row4Arr, row5Arr, row6Arr);
   
   // Display
   function appendElt(elt) {
      let initElt = document.createElement('p');
      initElt.appendChild(document.createTextNode('[' + elt + ']'));
      document.getElementById('seats').appendChild(initElt);
   }
   
   appendElt(row1Arr);
   appendElt(row2Arr);
   appendElt(row3Arr);
   appendElt(row4Arr);
   appendElt(row5Arr);
   appendElt(row6Arr);
   
   console.log('Line 1: [' + row1Arr + ']');
   console.log('Line 2: [' + row2Arr + ']');
   console.log('Line 3: [' + row3Arr + ']');
   console.log('Line 4: [' + row4Arr + ']');
   console.log('Line 5: [' + row5Arr + ']');
   console.log('Line 6: [' + row6Arr + ']');
   
   // test
  /* function compare(x, y) {
      let countI = 0;
      for(i = 0; i < x.length; i++) { 
         countI ++;
         let arrN = [];
         if(y[i] > x[i]) {
            arrN.push(y[i]);
            
            console.log(arrN)
            //return true;
         }
         else return x[i];
      }      
   }*/
   
   console.log(multidimArr);
   event.preventDefault();
});