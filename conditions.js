//1:if condition 2:if else condition 3:if else if condition

//1:if condition

let age = prompt("enter your age?");
if ((age) => 18) {
  console.log("your can drive car");
}

//2:if else condition

if (age > 18) {
  console.log("you can drive");
} else {
  console.log("you cant drive");
}

//3:if else if condition

if (age > 18) {
  console.log("you can drive");
} else if (age < 10) {
  console.log("you are kid");
} else {
  console.log("you cant drive");
}
