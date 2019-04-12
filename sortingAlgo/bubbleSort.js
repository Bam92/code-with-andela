let bubbleSort = (inputArr) => {
    let len = inputArr.length - 1;
    let swapped;
    
    do {
      swapped = false;
      for(let i = 0; i < len; i++) { // Number of passes
      //for (let j = 0; j < len; j++) {

        // Compare the adjacent positions
        if (inputArr[i] > inputArr[i + 1]) {
          // Swap the numbers
          let temp = inputArr[i];
          inputArr[i] = inputArr[i + 1];
          inputArr[i + 1] = temp; // Replace the adjacent number with the current number
          console.log("Swapped " + inputArr[i] + " and " + inputArr[i + 1]);
          console.log(inputArr);
          swapped = true;
          
        } else {
          console.log("No need to swap " + inputArr[i] + " and " + inputArr[i + 1]);
          console.log(inputArr);
        }
        
      //}
       
    }
    console.log("====================================");
    } while(swapped);
    return inputArr;
  };

  bubbleSort([2, 3, 4, 5, 1]);