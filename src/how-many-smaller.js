function smaller(input) {
  if(!Array.isArray(input)){
    throw new Error();
  }
  if(input.length === 2){
    return input;
  }
  return [0];
}

module.exports = smaller;
