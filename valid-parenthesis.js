//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

//there will be an even number of brackets total
//if you hit a closing bracket, it should close the bracket right before it
//

//valid
//{[{([])}]}
//{()}([])
//{}()[]

//invalid
//({[})]
//(]

var isValid = function(s) {
  if(s.length<1) return false;
  let validParens = "{} () []";
  let trace = [];
  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];
    trace.push(bracket);
    let previous = trace[trace.length-2];
    let combo = previous + bracket;
    if(validParens.includes(combo)){
      trace = trace.slice(0,-2);
    }
  }
  return trace.length == 0;
};

const s = "([])";
console.log(isValid(s));


//Fast solution from leetcode

var isValidFast = function(s) {
  const stack = []
  const map = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch)
    } else {
      const top = stack.pop()
      if (top !== map[ch]) {
          return false
      }
    }
  }
  return stack.length === 0;
};