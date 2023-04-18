let max = [3,5,88,99,76,8,4,5,85,63];
let max_val = max.reduce(function(a, b){
    return (a > b) ? a : b
  });
  console.log("max= ",max_val);
