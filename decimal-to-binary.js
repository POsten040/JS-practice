//if the decimal is one return 0
//for each digit, either increase 0->1 or add a leading 0
//

function decimalToBinary(decimal){
  if(decimal === '0'){
    return 0;
  }
  let x = 1
  let outPut = 0;
  for (let i = 1; i <= parseInt(decimal); i++) {
    if(i%2 === 0){
      let x = outPut.toString().split("").findLast((e) => {
        return e === 0;
      })
    } else if (i%2 !== 0){
      //add one on front and turn any 1s to 0s
      outPut = outPut.toString().split("").map((num) => {
        if(num === 1){
          return num = 0
        } else {
          return num
        }
      })
      outPut = parseInt(`1${outPut}`)
    }
  }
  return outPut;
}
let num = 4
console.log(decimalToBinary("4"))
console.log(num.toString(2))