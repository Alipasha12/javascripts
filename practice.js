//create an array of number and take input from the user to add numbers to this array
let arr = [11, 122, 36, 40, 59, 60]
let input = prompt("enter the value = ")
input = Number.parseInt(input)
arr.push(input)
console.log(arr)

//keep adding number to the array until 0 is added

let arr2 = [10,20,30,40,50,60]
let inp;
do{
    inp = prompt("enter the number:")
    inp = Number.parseInt(inp)
    arr2.push(inp)
}while(inp != 0);
console.log(arr2)

//filter fow number divisble by 10 from a given array

arr.filter((value)=>{
    return (value%10==0)
})

//create an array of square of given number

let n = arr.map((x)=>{
    return (x*x)
})
console.log(n)

//use reduce to calculate factorial of the arr

let r = arr.reduce((h1,h2)=>{
    return (h1 * h2)
})
console.log(r)