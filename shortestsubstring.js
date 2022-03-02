// ----KEY----
// _A{array}
// _S{string}
// _O{object}
// _R{regex}
// _I{index}

//OLD NOT WORKING WOLUTION
// const findSubStr = (string) => {
//   const letters_A = string.split("");
//   //build sub str, check for repeated letters
//   let currentStr = "";
//   // let longestStr = "";

//   let subStr_I = 0;
//   let subStr_A = [];
//   // let newStrStart = 0;
//   //let hash = {};
//   for(let i =0; i<letters_A.length; i++) {
//     let letter = letters_A[i];
//     if(subStr_A.includes(currentStr) && currentStr > 1){
//       currentStr = "";
//     } else if(currentStr.includes(letter)){
//       //find index of first match in orignal string
//       let match_I = letters_A.indexOf(letter);
//       //set loop index to the index of the letter directly ahead of the match
//       i = match_I+1;
//       //add substring to array
//       subStr_A[subStr_I] = currentStr;
//       //add matching letter to new current string
//       currentStr = letters_A[i];
//       //increase index of substring array for later
//       subStr_I++;
      
//       //currentStr = currentStr.slice(match_I);
//     } else {
//       currentStr += letter;
//       // hash[char] = i;
//     }
//   } 
  // {
  //   let letter = letters_A[i];
  //   let letter_I = letters_A.indexOf(letter);
  //   if(currentStr.includes(letter) && subStrs[count] !== currentStr){
  //     let firstMatch_I = letter_I;
  //     //i = knownLetters[letter];
  //     i = firstMatch_I;
  //     subStrs[count] = currentStr;

  //     count++;
  //     currentStr = "";
  //   } else {
  //     //console.log(subStr + " subStr else");
  //     currentStr += letter;
  //   }
  // }
  //REDUCE ARRAY 
//   subStr_A[subStr_I] = currentStr;
//   const result = subStr_A.reduce((a, b) => {
//     return a.length > b.length ? a : b
//   });
//   //RETURN
//   return result.length;
// }
const FSS = (string) => {
  //creat array
  const chars_A = string.split("");
  //index for start of sub string currently being examined by loop
  let start_I = 0;
  //create map for chars that have been visited
  let knownchars_O = {};
  let subStrLength = 0;
  //loop through array, using index as the 'end' of the current sub string
  for (let end_I = 0; end_I < chars_A.length; end_I++) {
    const char = chars_A[end_I];
    const match = knownchars_O[char];
    //if there is a match, and the matching letter's index is inside of the current substring (only focused on subset of chars)
    if(match !== undefined && match >= start_I){
      //update the 'start' of the substring to be one index ahead of the matching letter
      start_I = match + 1;
    }
    //add letter to map
    knownchars_O[char] = end_I;
    //calculate length of substring (add one to compensate for OBO error)
    let curSubStrLength =  end_I - start_I + 1 ;
    //check which substring length is longer, the current or the overall
    subStrLength = subStrLength > curSubStrLength ? subStrLength : curSubStrLength;
  }
  return subStrLength;
} 
const b = "aab";
const a = "abcabcbb";
const p = "pwwefw";
const s = "dvdf";
console.log(FSS(a))
// console.log(FSS(a))
// console.log(FSS(p))
// console.log(FSS(s))

function RemoveRepeatedLetters(string){
  const repeatedChars_R = /(.)\1+/g;
  const firstCapture_S = "$1";
  const s = string.replace(repeatedChars_R, firstCapture_S);
  return s;
}