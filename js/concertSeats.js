/*
 * Concert Seat
 *
 * @author Abel L
 */

function test() {
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
console.log('the status is [' + test() + ']');
