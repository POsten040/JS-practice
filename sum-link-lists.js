const l2 = {
  head: {
    value: 5,
    next: {
      value: 6,                                       
      next: {
        value: 4,
        next: null
        }
      }
    }
  }
const l1 = {
  head: {
    value: 2,
    next: {
      value: 4,                                       
      next: {
        value: 3,
        next: null	
        }
      }
    }
  }
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  }
var addTwoNumbers = function(l1, l2) {
  let firstNode = l1.head;
  let secondNode = l2.head;
  let sum1 = []
  let sum2 = []
  while(firstNode || secondNode){
    let val1 = firstNode.value ? firstNode.value : 0;
    let val2 = secondNode.value ? secondNode.value : 0;
    sum1.push(val1)
    sum2.push(val2)
    firstNode = firstNode.next
    secondNode = secondNode.next
  }
  const finalSum = Number(sum1.join("")) + Number(sum2.join(""))
  let resultArr = finalSum.toString().split("").reverse()
  let final = []
  resultArr.forEach((n) => final.push(Number(n)))
  let nodeFinal = new ListNode(final[0]);
  final.forEach((el) => {
    nodeFinal.next = new ListNode(el);
  })
  return nodeFinal;
};
console.log(addTwoNumbers(l1, l2))

const addTwoNumbers = (l1, l2) => {
  let result = null;
  let current = null;
  let carryOver = null;
  while(l1 || l2 || carryOver){
    let val1 = 0
    let val2 = 0
    let sum = 0
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
        val2 = l2.val;
        l2 = l2.next;
    }
    sum = val1 + val2;
    if(carryOver){
      sum++
      carryOver = null;
    }
    if(sum >= 10){
      carryOver = true;
      sum = sum - 10
    }
    if(!result){
      result = new ListNode(sum)
      currentNode = result
    } else {
      currentNode.next = new ListNode(sum)
      currentNode = currentNode.next
    }
  }
  return result
}