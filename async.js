async function harry(){
    let delhiWeather = new Promise((resolve,result)=>{
            setTimeout(()=>{
                resolve(1)
            },1000)
    })
    let mumbaiWeather= new Promise((resolve,result)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })    
    // delhiWeather.then(alert)
    // mumbaiWeather.then(alert)

    let delhiW = await delhiWeather
    let mumbaiW = await mumbaiWeather
    return[delhiW,mumbaiW]
}
console.log("hey i am a weather reporter")
let a = harry()
a.then((value)=>{
 console.log(value)
})