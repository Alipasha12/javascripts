//simple function
function avg(x, y){
  return (x+y)/2;
}
let a = 5;
let b = 6;
let c =10;
console.log("avg of a and b", avg(a,b))
console.log("avg of b and c", avg(b,c))
console.log("avg of a and c", avg(a,c))

//arrow function

const sum = (p,q)=>{
  return p + q
}

console.log(sum(10,6))