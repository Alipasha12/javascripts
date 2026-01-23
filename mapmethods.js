// 1: Map method (it create new array and perform different operation)

let arr = [20, 30, 40, 50, 60]

// simple syntax => arr.map( ()=>{ }) 
arr.map((value)=>{
    console.log(value)
    })

// 2: Filter method  (in this array pass a test and crete new array)

arr_filter = arr.filter((a)=>{
    return a > 50
})
console.log(arr_filter)

// 3: Reduce method (it give a single value)

arr_reduce = arr.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(arr_reduce)