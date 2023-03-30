/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l2 = {
  head: {
    value: 5,
    next: {
      value: 6,                                       
      next: {
        value: 8,
        next: null
        }
      }
    }
  }

const l1 = {
  head: {
    value: 4,
    next: {
      value: 5,                                       
      next: {
        value: 7,
        next: null	
        }
      }
    }
  }

var mergeTwoLists = function(list1, list2) {
  //if(!list1 || !list2) return new ListNode()
  let n1 = l1.head;
  let n2 = l2.head;
  let final = new ListNode()
  while(n1 && n2){
    console.log(n1.value)
    if(n1.value > n2.value){
      final.next = n1
      n1= n1.next
    } else if (n1.value < n2.value){
      final.next = n2
      n2 = n2.next
    }
  }
  let r = n1 || n2
  final.next = r
  return final;
};
const arrayToList = (arr) => {
  return arr.reduceRight((prev, curr) => {
    if(prev == null) prev = new ListNode(curr)
    else prev = new ListNode(curr, prev)
    return prev
  }, null)
}
let o = mergeTwoLists(l1, l2);
console.log(o)