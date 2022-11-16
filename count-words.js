// function countWordsObject(sentence) {
//   const wordArr = sentence.split(" ");
//   let obj = {};
//   wordArr.forEach((word, i) => { 
//     obj[word] ? obj[word]++ : obj[word] = 1;
//   })
//   return obj
// }

// /Extending Text Analyzer User Interface Logic
//Write a UI function that only bolds the part of the word that matches.
const subStr = 'pen';
const sentence = "shit happens"
function boldWords(subStr, sentence){
  const letterArray = sentence.split("");
  const matchIndex = letterArray.indexOf(subStr[0])
  if(matchIndex){
    let next = letterArray[matchIndex+1]
    for (let i = matchIndex; i < subStr.length; i++) {
      //if the letters match
      //return true or something
      
    }
  }
  return sentence.includes(subStr)
}
console.log(boldWords(subStr, sentence))

function countWordsArrayMethods(sentence){
//declaring the variables I'm using for the first loop
  const wordArr = sentence.split(" ");
  let words = [];
  let wordCount = [];
  wordArr.forEach(function (el){
    if(words.includes(el)){
      wordCount[words.indexOf(el)]++
    } else {
      words.push(el);
      wordCount.push(1);
    }
  })
//declaring variables I'll use for the second loop
  let outPut = [];
  words.forEach((el, i) => {
//still need to pass in el even though it's not getting used
    outPut[i] = [words[i], wordCount[i]]
  })
  return outPut; 
}

function removeBadWords(word, text) {
  let textArray = text.split(" ");
  textArray.forEach(function (element, i) {
      if (element === word) {
      textArray.splice(i, 1);
      }
  });
return textArray;
}
// const word = "hi";
// const text = "oh hi there bud"
// console.log(removeBadWords(word, text))