// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

function Pigify(phrase){
  const vowels = ['a','e','i','o','u'];
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x','y','z']
  const qu = ['qu'];
  const arr = phrase.split(" ");
  let outPut = [];
  arr.forEach((word) => {
    let firstTwo = word[0] + word[1];
    if(vowels.includes(word[0])){
      outPut.push(`${word}way`)
    } else if(qu.includes(firstTwo)) {
      let newWord = word.replace('qu', "");
      newWord = newWord + firstTwo + 'ay';
      outPut.push(newWord);
    } else if(consonants.includes(word[0])){
      let conso = [];
      let restOfWord = [];
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if(consonants.includes(letter)){
          conso.push(letter);
        } else {
          restOfWord.push(word.slice(i));
          break;
        }
      }
      outPut.push(restOfWord.join("") + conso.join("") + 'ay')
    } else {
      outPut.push(word);
    }
  })
  return outPut.join(" ");
}
let p = "a long squeal quick brick  move away";
console.log(Pigify(p));

