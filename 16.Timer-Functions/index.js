

// console.log(window)


var timeoutBtn = document.getElementById('cleartimeout')

var timeout = setTimeout(() => {
  console.log('timeout')
}, 4000)

function timeoutBtnFun() {
  clearTimeout(timeout)
}

timeoutBtn.addEventListener('click', timeoutBtnFun)


var intervalBtn = document.getElementById('clearinterval')

var interval = setInterval(() => {
  console.log('interval')
}, 4000)

function intervalBtnFun() {
  clearInterval(interval)
}

intervalBtn.addEventListener('click', intervalBtnFun)


