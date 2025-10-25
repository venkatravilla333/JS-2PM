

var table = document.getElementById('table')

function tableFun(e) {
  console.log('clicked')
  console.log(e)
  console.log(e.target)
}

table.addEventListener('click', tableFun)