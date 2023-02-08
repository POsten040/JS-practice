var LongerThanZero = (word) => word.length > 0;
var lengthOfLastWord = function(s) {
  const sArray = s.split(" ").filter(LongerThanZero)
  return sArray[sArray.length-1].length;
};
const w = "this is a long wordsdf 12    "
const r = lengthOfLastWord(w)
console.log(r)