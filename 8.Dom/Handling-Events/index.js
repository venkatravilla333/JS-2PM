

var subChild = document.getElementById('subchild')

function subChildFun(e) {
  console.log('sub child')
  console.log('target', e.target)
  console.log(e)
  e.stopPropagation()
  console.log(e.clientX)
  console.log(e.clientY)
  console.log(e.offsetX)
  console.log(e.offsetY)
}

subChild.addEventListener('click', subChildFun)

var child = document.getElementById('child')

function childFun(e) {
  console.log('child')
  console.log(e)
}

child.addEventListener('click', childFun)

var parent = document.getElementById('parent')

function parentFun(e) {
  console.log('paent')
  console.log(e)
}

parent.addEventListener('click', parentFun)

var parentHtml = document.getElementById('top')
// console.log(parentHtml)

function parentHtmlFun(e) {
  console.log('top parent')
  console.log(e)
}

parentHtml.addEventListener('click', parentHtmlFun)

