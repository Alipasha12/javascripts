//<---------------------------------------------------------------------------------------------->


// let b = document.body
// console.log(b.firstChild)
// console.log(b.firstElementChild)


//<-------------------------------- 3 important methods ----------------------------------------->
//<---------------------------------elem.matches(css)-------------------------------------------->


// let i1 = document.getElementById("id1")
// console.log(i1)
// console.log(i1.matches(".class"))// it gives false bcoz where the id is id1 there is no class of name class
// console.log(i1.matches(".box"))//it gives true bcoz the condition  is true


//<---------------------------------elem.closest(css)-------------------------------------------->


// let sp1 = document.getElementById("sp1")
// console.log(sp1.closest(".box"))


//<---------------------------------elemA.contain(elemB)-------------------------------------------->

// console.log(id1.contains(sp1)) //its give true bcoz id1 contain sp1
// console.log(sp1.contains(id1)) //its give false bcoz sp1 don't contain id1




//<---------------------------------Random joke-------------------------------------------->

// let jokes = [{
//     "id": 1,
//     "title": "I am joke 1"
// },{
//     "id": 2,
//     "title": "I am joke 2"
// },{
//     "id": 3,
//     "title": "I am joke 3"
// },{
//     "id": 4,
//     "title": "I am joke 4"
// },{
//     "id": 5,
//     "title": "I am joke 5"
// },{
//     "id": 6,
//     "title": "I am joke 6"
// }
// ]

// let index = Math.floor(Math.random()*(jokes.length))
// console.log(index)

// joke.innerHTML = jokes[index].title
// console.log(joke)


//<---------------------------------making clock-------------------------------------------->


// function updateClock(){
// let clock = new Date()
// let h = clock.getHours()
// let m = clock.getMinutes()
// let s = clock.getSeconds()
// let d = clock.getDate()

// console.log(h, m, s)
// }
// setInterval((updateClock),1000);

//<---------------------------------increase number container-------------------------------------------->


let count1 = document.querySelector('.count')
let countnumber = 0;
let maxcount = 899;
const updateNumber = setInterval(()=>{
    countnumber++;
    count1.textContent = countnumber
    if(countnumber >= maxcount){
        clearInterval(updateNumber);
        count1.style.color = 'red'
    }
},10)