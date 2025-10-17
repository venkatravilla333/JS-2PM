


var currentDiv = document.getElementById('current')

console.log(currentDiv)

currentDiv.style.background = 'blue'

//move to parent

var parentElement = currentDiv.parentElement

console.log(parentElement)

parentElement.style.background = 'yellow'

//siblings

var preSib = currentDiv.previousElementSibling
console.log(preSib)

preSib.style.background = 'green'

var nextSib = currentDiv.nextElementSibling
console.log(nextSib)

nextSib.style.background = 'red'

//childs

var firstChild = currentDiv.firstElementChild

console.log(firstChild)

firstChild.style.fontSize = '25px'

var lastChild = currentDiv.lastElementChild

console.log(lastChild)

lastChild.style.fontSize = '25px'

var childs = currentDiv.children

console.log(childs)

childs[0].style.color = 'white'
childs[1].style.color = 'red'
childs[2].style.color = 'yellow'