//https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/description/
//THis question is confusing to read, and I'm very unclear on what it wants. So I'm giving up. This quesiton will have to wait for another, braver, patrick to solve. 
var maxDiff = function(num) {
    let numArr = Array.from(num.toString());
    let a = null;
    let b = null;
    let rand = Math.floor((Math.random() * (numArr.length-1))+1)
    let x = numArr[rand]
    for(let i=0; i<2; i++){
        let y = (i===0 ? 9 : 1).toString();
        if(a){
            b = a.map(el => {
                if(el == x){
                    return el = y
                } else {
                    return el;
                }
            }) 
        } else {
            a = numArr.map(el => {
                if(el == x){
                    return el = y
                } else {
                    return el;
                }
            }) 
        }
    }
    a = +a.join("")
    b = +b.join("")
    return Math.abs(a - b);
};
let x = 123456;
//answer = 820000
console.log(maxDiff(x))


///works for first two cases not the third 
// var maxDiff = function(num) {
//     let numArr = Array.from(num.toString());
//     let a = null;
//     let b = null;
//     for(let i=0; i<2; i++){
//         let y = i===0 ? 9 : 1;
//         if(a){
//             b = numArr.map(el => el = y) 
//         } else {
//             a = numArr.map(el => el = y) 
//         }
//     }
//     a = +a.join("")
//     b = +b.join("")
//     return Math.abs(a - b);
// };