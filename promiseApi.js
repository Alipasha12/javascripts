// There are 6 methpds of promise class

// 1: Promise.all  {its used to await until all promise are completed and gives result at same time}
// {its give error if there is any reject }
let p1 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        resolve(1);
    },1000);
})

let p2 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)    
});

let p3 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        resolve(20)
    },3000)
})
// ----------------------------------EXTRA--------------------------------
// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

let all_promise = Promise.all([p1,p2,p3])

all_promise.then((value)=>{
    console.log(value)
})


// 2 : Promise.allsettled : its used when there is rejected its run

let p4 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        resolve(1);
    },1000);
})

let p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("error"))
    },2000)    
});

let p6 = new Promise((resolve,result)=>{
    setTimeout(()=>{
        resolve(20)
    },3000)
})

let all_settledPromise = Promise.allSettled([p4,p5,p6])

all_settledPromise.then((value)=>{
    console.log(value)
})

// 3: Promimse.race {it give the frist promise which resolved quick it give error if rejects}

let promise_race = Promise.race([p1,p2,p3])

promise_race.then((value)=>{
    console.log(value)
})

// 4: Promise.any {it give the fullfilled value if error comes it goes to next promise}

let promise_any = Promise.any([p1,p2,p3])

promise_any.then((value)=>{
    console.log(value)
})

// 5: Promise.resolve {make a resolved promise with the given value}

let resolve_promise = Promise.resolve(5)
resolve_promise.then((value)=>{
    console.log(value)
})

// 5: Promise.reject {make a rejected promise with the given error}

let reject_promise = Promise.reject(new Error("i am error"))
reject_promise.then((value)=>{
    console.log(value)
})
