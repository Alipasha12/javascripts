//some methods of attributes

// 1: getAttribute used to get the value of attribute
//syntax let a = Id.getAttribute("class")
let a = id1.getAttribute("box")
console.log(a)

// 2: hasAttribute is used to check the existence of attribute

let b = id1.hasAttribute("box") //check the attribute is exist or not if yes then give true else false
console.log(b)


// 3: setAttribute is used to set the value of class

let c = id1.setAttribute("hidden","true")//its true the hidden
let d = id1.setAttribute("class", "box sachin")// it give the class box sachin

// 4: removeAttribute is used to remove the attribute from the element

let e = id1.removeAttribute("box")

// 5: we can also make the attribute
//syntax: we use "data-" and use dataset

<div id="box" data-game="mario" data-player="ali"> hello </div>

console.log(id.dataset)//its give the domNodeList
console.log(id.dataset.game)
console.log(id.dataset.player)