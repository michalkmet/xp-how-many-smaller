function smaller(arrayOfNumbers) {
  if(!Array.isArray(arrayOfNumbers)){
    throw new Error();
  }
  
  if(arrayOfNumbers.length < 2) {
    return [0];
  }

  let firstNumber = arrayOfNumbers[0];
  let secondNumber = arrayOfNumbers[1];

  if(firstNumber === secondNumber || firstNumber < secondNumber){
    return [0,0];
  }
  if(secondNumber < firstNumber) {
    return [1,0];
  }
  

  return [0];
}

module.exports = smaller;
