

// console.log(window)



var setDataBtn = document.getElementById('setdata')

function setDataFun() {
  // localStorage.setItem('name', 'kohli')
  // localStorage.setItem('age', 40) 
  sessionStorage.setItem('name', 'kohli')
  sessionStorage.setItem('age', 40) 
  
}

setDataBtn.addEventListener('click', setDataFun)

//get data

var body = document.getElementById('body')

var getDataBtn = document.getElementById('getdata')

function getDataFun() {
  // console.log(localStorage.getItem('name')) 
  // console.log(localStorage.getItem('age')) 
//  var name = localStorage.getItem('name')
//   var age = localStorage.getItem('age')
 var name = sessionStorage.getItem('name')
  var age = sessionStorage.getItem('age')
  var h3 = document.createElement('h3')
  console.log(h3)
  h3.textContent = `This is ${name}, my age is ${age}`
  body.appendChild(h3)
}

getDataBtn.addEventListener('click', getDataFun)


//remove item

var removeBtn = document.getElementById('removeItem')

function removeBtnFun() {
  // localStorage.removeItem('name')
  // localStorage.removeItem('age')
  // sessionStorage.removeItem('name')
  // sessionStorage.removeItem('age')
  // localStorage.clear()
  sessionStorage.clear()
}

removeBtn.addEventListener('click', removeBtnFun)

