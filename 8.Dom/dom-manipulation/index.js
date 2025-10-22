
var dataFromDb = 'data from db'

var h4 = document.createElement('h4')
console.log(h4)

h4.textContent = dataFromDb

var addBtn = document.getElementById('add')

var body = document.getElementById('body')
console.log(body)

function addBtnFun() {
  console.log('hello')
  body.appendChild(h4)
}
addBtn.addEventListener('click', addBtnFun)

var h1 = document.createElement('h1')

h1.innerText = 'This is heading one'
console.log(h1)

// body.appendChild(h1)

// body.insertBefore(h1, h4)

//Replace

var updateBtn = document.getElementById('update')

var h2 = document.createElement('h2')

h2.innerText = 'This is heading two'


function updateBtnFun() {
  body.replaceChild(h2, h4)
}

updateBtn.addEventListener('click', updateBtnFun)

//delete

var deleteBtn = document.getElementById('delete')

function deleteBtnFun() {
  // h2.remove()
  body.removeChild(h2)
}

deleteBtn.addEventListener('click', deleteBtnFun)








