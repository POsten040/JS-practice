const x = [4,2,1,1,2];
const extra = 1;
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let out = [];
  candies.forEach((number) => {
    const sum = number + extraCandies;
      if(sum >= max){
          out.push(true);
      } else if (sum < max){
          out.push(false)
      }
  })
  return out;
};
console.log(kidsWithCandies(x, extra))

