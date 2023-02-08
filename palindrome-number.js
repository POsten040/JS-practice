const x = 123;
const y = -123;
const high = 1534236469;

var reverse = function(x) {
  const limit = (2**31)-1;
  let isNegative = false;
  if(x < 0){
    x = Math.abs(x);
    isNegative = true;
  }
  let a = Array.from(x.toString()).reverse();
  if(x >= limit || x === 0) return 0;
  if(isNegative){
    return -(+a.join(""));
  } else {
    return +a.join("");
  }
};
console.log(reverse(high));