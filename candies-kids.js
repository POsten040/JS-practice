const x = [4,2,1,1,2];
const extra = 1;

//get highest num from candies arr
//loop through arr 
//add extra candies to each el
//compare to max
//create output arr to hold booleans

// var kidsWithCandies = function(candies, extraCandies) {
//   let max = Math.max(...candies);
//   let out = [];
//   candies.forEach((number) => {
//     const sum = number + extraCandies;
//       if(sum >= max){
//           out.push(true);
//       } else if (sum < max){
//           out.push(false)
//       }
//   })
//   return out;
// };
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let out = [];
  return candies.map((el) => {
    return el + extraCandies >= max
  })
};
console.log(kidsWithCandies(x, extra))

