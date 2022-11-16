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

//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
var addTwoNumbers = function(l1, l2) {
  let firstNode = l1.head;
  let secondNode = l2.head;
  while(firstNode.next){
    
  }
};
addTwoNumbers(l1, l2)