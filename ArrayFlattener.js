// [1,2,3,4,[1,3,4,5],[1,4,5,6, [2,5,6,78,8]]]; 
// flatten the array with your logic without inbuilt functions?

// 1.By using Stack
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    // pop value from stack
    const next = stack.pop();
    if(Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}
console.log(flatten(arr));

//2.By Using forEach loop and isArray property of arrays
function flatten(arr){
  let flattenArr=[];
  arr.forEach(element => {
    if(Array.isArray(element)){
      flattenArr=flattenArr.concat(flatten(element));
    }
    else{
      flattenArr.push(element);
    }
  });
  return flattenArr;
}
let nestArr=[1,2,3,4,[1,3,4,5],[1,4,5,6, [2,5,6,78,8]]];
console.log(flatten(nestArr));

//3.By using inBuilt flat()
const arr = [1,2,3,4,[1,3,4,5],[1,4,5,6, [2,5,6,78,8]]];
console.log(arr.flat());

//4.By using concat method
function Farr(nestArr){
  return nestArr.reduce((a,b)=>{
    return a.concat(Array.isArray(b)?Farr(b):b );
  },[]);
}
let nestArr=[1,2,3,4,[1,3,4,5],[1,4,5,6, [2,5,6,78,8]]];
console.log(Farr(nestArr));

//5.ES6 version
const flatten = (ary) => ary.reduce((a, b) =>
 a.concat(Array.isArray(b) ? flatten(b) : b), [])

//6.flat method
 nestArr.flat(Infinity);

//7.concat method
var merged = [].concat.apply([], nestArr);
console.log(merged);

