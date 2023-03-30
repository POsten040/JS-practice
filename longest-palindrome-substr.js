let x = "abbacc"
var longestPalindrome = (str) =>{
  let start = 0
  let end = 0
  for (let i = 0; i < str.length; i++) {
    //const char = str[i];
    const len1 = buildSub(i, i, str)
    const len2 = buildSub(i, i+1, str)
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return str.substring(start, end + 1);
}
const buildSub = (l, r, s)=>{
  while(l>=0 && r<=s.length && s.charAt[r] == s.charAt(l)){
    l--
    r++
  }
  return r - l - 1
}
const r = longestPalindrome(x)
console.log(r)

const p = " a "
//console.log(IsPalin(p))
//-----------------incomplete solution-----------------\
// var longestPalindrome = function(s) {
//   const charArr = s.split("")
//   let subStrs = []
//   for (let i = 0; i < charArr.length; i++) {
//     const letter = charArr[i];
//     const firstIndex = charArr.indexOf(letter)
//     const lastIndex = charArr.lastIndexOf(letter)
//     let sub = charArr.slice(firstIndex, lastIndex+1).join("")
//     if(lastIndex != firstIndex && !subStrs.includes(sub)){
//       subStrs.push(sub)
//     }
//   }
//   //subStrs = list of all subStrs that begin and end in same letter
//   let r = subStrs.filter((strs) => {return IsPalin(strs)})
//   const result = r.reduce((a,b) => Longest(a,b))
//   return result;
// };
// function IsPalin(arr){
//   const reverse = [...arr].reverse().join("")
//   if(reverse == arr) return true
//   return false
// }
// function Longest(a, b){
//   const r = a.length >= b.length ?
//   a : 
//   b
//   return r
// }

// function IsPalin(str) {
//   if(str.length<1 || !str) return false
//   str.split("")
//   const reverse = [...str].reverse().join("")
//   if (reverse == str) return true
//   return false
// }
// var longestPalindrome = (str) => {
//   if(str.length<=1) return str;
//   let subArr = []
//   for (let i = 0; i < str.length; i++) {
//     const l1 = str[i];
//     for (let j = 0; j < str.length; j++) {
//       const l2 = str[j];
//       if (l1 == l2){
//         let sub = str.slice(i, j + 1)
//         if(IsPalin(sub)) subArr.push(sub)
//       }
//     }
//   }
  
//   let result =  subArr.reduce(function (a, b) {
//         return a.length > b.length ? a : b;
//       },[]);
//   return result
// }