// Guess the number

let x = Math.floor(Math.random() * 100)
 let i

while(i!=x){
    i = prompt("Guess the number : ")
    if(i>x){
    console.log("Random number is less than guess number")
}
else if(i<x){
    console.log("Random number is greater than guess number")
}
}
console.log("you guess the number : " , x)