// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
    // If the length is 0 (base case), return len (0).
    // if (str.length === 0) return len;
    if (!str.length) return len;
  
    // Remove the first letter of the string
    let restOfString = str.substring(1);
  
    // Call function again, with updated string and len
    return lengthOfString(restOfString, ++len);
  }
  
  function sumOfArray(arr) {
    // This function returns the sum of all of the numbers in a given array.
    
    let indexOfArr = 0 
    let defaultTotal = 0

    function newTotal() {
        if(indexOfArr === arr.length){
            return defaultTotal
        }
        defaultTotal += arr[indexOfArr]
        indexOfArr++;
        return newTotal()
    }
    return newTotal()
  }
  console.log('sum of Array',sumOfArray([1, 2, 3, 4, 5]))
  
  
  function findMax(arr) {
    if (arr.length === 1) {
      return arr[0]; 
    }

    const maxOfRemaining = findMax(arr.slice(1));

    if (arr[0] > maxOfRemaining) {
  
      return arr[0]; 
    } else {
      return maxOfRemaining; 
    }
  }
  console.log('biggestnum of max array', findMax([6, 12, 3, 15, 9]))
  
function factorial(num) {
        if (num === 0 || num === 1) {
          return 1;
        }
        return num * factorial(num - 1);
      }
console.log('factorial', factorial(6))
   

  
function fibonacci(n) {
   
    if (n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
console.log("fibonacci", fibonacci(6))


function coinFlips(num) {
  
    if (num === 0) {
      return [""];
    }
    const outcomes = coinFlips(num - 1);
    const results = [];
  
    for (let outcome of outcomes) {
      results.push(outcome + "H"); // 
      results.push(outcome + "T"); 
    }
    return results;
  }
  console.log('coinflip result after 3 times', coinFlips(3))
  
  function letterCombinations() {
   ////???????????????????????????????????????
  }
  
  module.exports = {
    lengthOfString,
    sumOfArray,
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations,
  };