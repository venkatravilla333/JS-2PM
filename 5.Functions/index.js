

// function test() {
  
// }
// test()

// //expression

// var x = function test() {
  
// }
// x()

// var y = function () {
  
// }
// y()

// var z = ()=> {
  
// }
// z()

//params vs arguments

// function test(a = 10,b = 20,c = undefined) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// test(1,true, undefined)



// varying no of params vs arguments

// var test = ()=> {
//   // console.log(a + b + c)
//   console.log(arguments, Array.isArray(arguments))
//   console.log(arguments[0])
//   console.log(arguments[1])
//   console.log(arguments[2])
//   console.log(arguments[3])
//   console.log(arguments[4])

//   var sum = 0

//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)


// var test = (...rest)=> {
//   console.log(rest)
//   // console.log(rest[0])
//   // console.log(rest[1])
//   // console.log(rest[2])
//   // console.log(rest[3])
//   // console.log(rest[4])
//   var sum = 0
//   for (var value of rest) {
//     sum += value
//   }
//   console.log(sum)
// }
// test( 1, 2, 3, 4, 5)


//scope

// var a = 1

// let b = 2

// const c = 3

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   var d = 4
//   let e = 5
//   const f = 6

//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
//   if (true) {
//     var g = 7
//     let h = 8
//     const i = 9
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }

// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)
// test()

//hoisting

// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = {
//   name: 'kohli'
// }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// var h = function named() {
//   console.log('named')
// }
// h()
// console.log(h)

// console.log(i)
// var i = function () {
//   console.log('ananymous')
// }
// console.log(i)

// console.log(j)
// var j = () => {
//   console.log('arrow')
// }
// console.log(j)

// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)

//var vs let vs const

//scope

//hoisting

//redeclaration

// var a = 10
// let a = 10
// const a = 10
// console.log(a)

// var a = 20
// let a = 20
// const a = 20
// console.log(a)


//re-assignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)
// a = 20
// console.log(a)

//initialiazation

// var a
// let a
// const a
// console.log(a)
// // a = 10
// console.log(a)


//closure

function outerFun() {
  var x = 100
  var y = 200
 return function innerFun() {
    console.log(x)
  }
}

var innerFun = outerFun()
innerFun()



