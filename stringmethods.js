let name = "Ali Abbas"
name[0]="a"
console.log(name)
//for calculate the kength of string
console.log(name.length)

//for uppercase
console.log(name.toUpperCase())

//for lowercase
console.log(name.toLowerCase())

//for 2 index to 8 index but not include 8 index
console.log(name.slice(2,8))

//from only one index to end
console.log(name.slice(2))

//for replace value
console.log(name.replace("Abbas","Pasha"))

//for add string 
let friend = "honey"
console.log(friend.concat(" is a friend of ", name))

//for remove white space
let freind2 = "    suhail     "
console.log(freind2.trim())

//for find value by index
console.log(name[2])