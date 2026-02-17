// callback function

function loadscript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("SRC: " + src);
    callback();
    //callback(null,error)
  };
  
  //To handle error

//   script.onerror = function () {
//     console.log(src);
//     callback(new Error("src get some error"));
//   };
  document.body.appendChild(script);
}

loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
  hello,
);

function hello(src) {
// function hello(error,src) {
    // if(error){
    //     console.log(error)
    //     return
    // }
  alert("hello " + src
  );
}

// To handle error we use onerror

script.onerror = function () {
  console.log(src);
  callback(new Error("src get some error"));
};
