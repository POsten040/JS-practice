const string1 = "hello"; //false
const string2 = "pilnam"; //true

function isunique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

function IsUnique(string){
  let knownLetters = {};
  let unique = true;
  for (let i = 0; i < string.length; i++) {
    knownLetters[string[i]] ? knownLetters[string[i]]++ : knownLetters[string[i]] = 1;
  }
  Object
    .values(knownLetters)
    .forEach(letterCount => {
      if(letterCount > 1) {unique = false;}
  })
  return unique;
}


var s3 = performance.now();
console.log(isunique(string1))
var e3 = performance.now();
const time3 = Math.abs((s3-e3) * 100).toFixed(2)
console.log(`isunique time is ${time3} ms`)

var s3 = performance.now();
console.log(IsUnique(string1));
var e3 = performance.now();
const time4 = Math.abs((s3-e3) * 100).toFixed(2)
console.log(`ISUNIQUE time is ${time4} ms`)
