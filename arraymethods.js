//methods of Array

// 1: convert Array into string
let num = [10, 20, 30, 40, 50, 60]
let b = num.toString()
console.log(b)

// 2: to seperate by sybmol,underscore

console.log(num.join("-"))

// 3: Delete/ popped out the item

console.log(num.pop())//it return the popped value

// 4: push/add element

console.log(num.push(70))//it return the new length of array
console.log(num)

// 5: remove first element and return it

console.log(num.shift())
console.log(num)

// 6: add element on beginning on the array

console.log(num.unshift(80)) //its return the new length if array
console.log(num)