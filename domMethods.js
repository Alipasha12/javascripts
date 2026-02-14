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


 //there are three important methods to search the dom

 elem.matches(css)// check element matches thegiven css selector
 elem.closest(css)// check the ancestor matches the given css selector
 elemA.contains(elemB)//it check the elemA is contain elemB 