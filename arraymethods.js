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

// 7: delete array 

delete num[0] //it delete the value but can't change the length of array
console.log(num)

// 8: to two or more array 

let num2 = [80, 90, 100, 110, 120, 130]
let newArray = num.concat(num2) // it never change the array it always make a new array we can also add more array by num.concat(num2,num3,num4)
console.log(newArray)

// 9: sorting method
let num3 = [8, 90, 10, 110, 20, 30, 627]
console.log(num3.sort()) //this method is sort by first numer according in ascending order its change original array

// it you want to fully sorting you make a function

let ascending = (a,b)=>{
    return a - b //in full ascending order 
}
let decending = (a,b)=>{
    return b - a //in full decending order
}
console.log(num3.sort(ascending))
console.log(num3.sort(decending))

// 10: reverse => if you want to reverse array 

console.log(num3.reverse())

// 11: splice  in splice we pass 3 argument 1:from which index, 2:how much element delete, 3:which item is added 
// its don't change original array it return th delete items

newSpliceArray = num3.splice(1, 3, 1000, 1010, 1020, 1030)
console.log(newSpliceArray)
console.log(num3)

// 12: slice 

let slice = num3.slice(2) //it gives all value from index 2 to end
console.log(slice)

let newslice = num3.slice(1,4) //its never give 4 index value
console.log(newslice)
