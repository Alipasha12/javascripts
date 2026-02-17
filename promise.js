//promises in javascripts

let p1 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        console.log("hello after 2 sec")
    },2000)
    resolve("56")
})
p1.then((value)=>{
    console.log(value)
})