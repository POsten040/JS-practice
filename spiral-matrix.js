const n = 3;
//Input: n = 3
//Output: [[1,2,3],[8,9,4],[7,6,5]]
//BROKEN
var generateMatrix = function(n) {
  let columns = []
  let count = 0
  const direction = [[0,1], [1,0], [0,-1], [-1, 0]]
  //0,1 right
  //1,0 down
  //0,-1 left
  //-1,0 up
  let d = 0
  let currRow = 0
  let currCol = 0
  //const allNums = Array.from({length: n**2}, (_, i) => i+1)
  for (let i = 0; i < n; i++) {
    columns.push(new Array(n))
    columns[i].fill(0)
  }
  while(count < n**2){
    count++
    columns[currRow][currCol] = count
    let nextRow = currRow + direction[d][0]%n//row plus x dir
    let nextCol = currCol + direction[d][1]%n//col plus y dir
    try{
      if(typeof columns[nextRow][nextCol] != "number" || columns[nextRow][nextCol] > 0 ) d = (d+1) % 4//change direction
    } catch {
      d = (d+1) % 4
    }
    currRow += direction[d][0]//move along x
    currCol += direction[d][1]//move along y
    console.log(`${nextRow} and ${nextCol}`)
  }
  return columns
};
//altenate
//fix row fill col
//fix col fill row
//until you stop reaching empty

const r = generateMatrix(n);
console.log(r)
// console.log(new Array(1)[0])