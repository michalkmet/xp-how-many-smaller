function smaller(arrayOfNumbers) {
  if(!Array.isArray(arrayOfNumbers)){
    throw new Error();
  }

  let result = [];
  
  if(arrayOfNumbers.length < 2) {
    return [0];
  }
  
  for(let i=0;i<arrayOfNumbers.length;i++){
    let currentNumber = arrayOfNumbers[i];
    let higherNumbersCounts = 0;
    for(let j=i+1;j<arrayOfNumbers.length;j++){
      if(arrayOfNumbers[j] < currentNumber){
        higherNumbersCounts++;
      }
    }
    result.push(higherNumbersCounts);
  }
  return result;
}

module.exports = smaller;
