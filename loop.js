// 1:for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//2 while loop

let n = prompt("enter the value of n");
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}

//3 do while loop

let x = prompt("enter the value of n");
let y = 0;

do{
  console.log(y);
  y++;
}
while(y<x)

//4 for of 

let num = [10, 20, 30, 40, 50]
for(let item of num){
  console.log(item)
}

//5 for in

for(let arrItem in num){
  console.log(arrItem) // it give item keys
  console.log(num[arrItem])//it give value of key
}