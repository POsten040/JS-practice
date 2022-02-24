// ----KEY----
// _A{array}
// _S{string}
// _O{object}
// _R{regex}
// _I{index}

const findSubStr = (string) => {
  //remove dups from input, turn into array
  const repeatedChars_R = /(.)\1+/g;
  const firstCapture_S = "$1";
  const s = string.replace(repeatedChars_R, firstCapture_S);
  const letters_A = s.split("");
  //console.log(letters_A);
  //build sub str, check for repeated letters
  let subStr = "";
  //console.log(subStr + " subStr init");
  for(let i=0; i<letters_A.length; i++) {
    if(subStr.includes(letters_A[i])){
      let firstMatch_I = letters_A.indexOf(letters_A[i]);
      i = firstMatch_I + 1;
      subStr = "";
    } else {
      //console.log(subStr + " subStr else");
      subStr += letters_A[i];
    }
  }
  return subStr;
}
const a = "aabbccdaabbcc";
const p = "pwwefw";
const s = "dvdf";
console.log(findSubStr(a))
console.log(findSubStr(p))