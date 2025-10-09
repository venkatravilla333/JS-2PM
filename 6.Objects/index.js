


// var person1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// person1.play()

// var person2 = {
//   name: 'kohli',
//   age: 35,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person2.name)
// console.log(person2.age)
// person2.play()


// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = function () {
//     console.log('play')
//   }

// }

// var person1 = new Test('sachin', 40)
// console.log(person1)
// var person2 = new Test('kohli', 35)
// console.log(person2)
// var person3 = new Test('dhoni', 38)
// console.log(person3)


// ES-6

// class Test{
//   constructor(name, age) {
//     // console.log(this)
//     this.name = name;
//     this.age = age;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }
// var person1 = new Test('sachin', 40)
// console.log(person1)
// var person2 = new Test('kohli', 35)
// console.log(person2)
// var person3 = new Test('dhoni', 38)
// console.log(person3)

// // console.log(typeof Test)

//objects are dynamic

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }

//how to access object values

// console.log(person1.name)
// console.log(person1.age)
// person1.play()

//how to add new properties to object
// console.log(person1)

// person1.color = 'red'
// person1.go = function () {
//   console.log('go')
// }
// console.log(person1)

//how to update object values
// console.log(person1)

// person1.name = 'kohli'

// console.log(person1)

// how to delete object properties

// console.log(person1)
// delete person1.name
// delete person1.play
// console.log(person1)


// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }


// console.log(person)

//without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// person.play()

//with using loop

// for (var key in person) {
//   console.log(key, person[key])
// }

// var keys = Object.keys(person)
// var values = Object.values(person)
// var entries = Object.entries(person)
// console.log(keys)
// console.log(values)
// console.log(entries)


//copy

//primitives  (deep copy )

// var x = 10
// console.log(x)
// var y = x
// y = 20
// console.log(y)

// import lodash from 'lodash'
// var lodash = require('lodash')

// var originalObj = {
//   name: 'sachin',
//   addess: {road: 101},
//   play: function () {
//     console.log('play')
//   }
// }

// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy
// var copiedObj = Object.assign({}, originalObj)//shallow copy (ES-5)
// var copiedObj = {...originalObj} //shallow copy (ES-6)

// copiedObj.name = 'kohli'
// copiedObj.addess.road = 201
// console.log(originalObj)
// console.log(copiedObj)


//template string (ES-6)

// var name = 'sachin'

// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'My age is' + ' ' + age) //es-5
// console.log(`Hi this is ${name} my age is ${age}`) //es-6
