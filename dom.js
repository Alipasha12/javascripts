//searchng the DOM (document object models)

// here are some methods in document

// 1: search by id

const title = document.getElementById(hello)
 title.style.color = "red"

// 2: select by css query

const titles = document.querySelectorAll(.classname)
 titles[0].style.color = "red"
 titles[1].style.color = "blue"
 titles[2].style.color = "green"
 console.log(titles)