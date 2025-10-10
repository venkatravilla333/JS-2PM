


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


// Math object

// console.log(window.Math)

// console.log(Math.min(2,5,9))
// console.log(Math.max(2,5,9))
// console.log(Math.floor(10.1))
// console.log(Math.floor(10.9))
// console.log(Math.ceil(10.1))
// console.log(Math.ceil(10.9))
// console.log(Math.round(10.5))
// console.log(Math.round(10.4))
// console.log(Math.random()*100)
// console.log(Math.pow(2, 4))
// console.log(Math.sqrt(25))

// var current = new Date()
// console.log(current)

// console.log(current.getFullYear())
// console.log(current.getDate())
// console.log(current.getDay())
// console.log(current.getHours())
// console.log(current.getMinutes())

// current.setFullYear(2040)

// console.log(current)

// var date1 = new Date(2050, 11, 10, 10, 10, 10)
// console.log(date1)
// console.log(date1.getFullYear())
// console.log(date1.getHours())
// console.log(date1.getMinutes())
// console.log(date1.getSeconds())

// date1.setFullYear(2047)

// console.log(date1)

// var date2 = new Date('2040 nov 10 10:10:10')
// console.log(date2)

// console.log(date2.getFullYear())
// console.log(date2.getDate())
// console.log(date2.getMonth())
// console.log(date2.getHours())
// console.log(date2.getMinutes())
// console.log(date2.getSeconds())

// date2.setFullYear(2020)
// console.log(date2)



var person = {
  name: 'sachin',
  age: 40,
  city: 'mumbai',
  address: { road: 101 },
  properties: ['bat', 'cash']
}
//without destructuring

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.address.road)
// console.log(person.properties[0])
// console.log(person.properties[1])

//with destructuring (ES-6)

// var { name, age, city, address: {road}, properties: [x, y] } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(x)
// console.log(y)


var arr = [1, 2, 3, 4, 5, {bats: 100, cash: 100000}, ['sachin']]

//without destructuring

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5].bats)
// console.log(arr[5].cash)
// console.log(arr[6][0])


//with destructuring

var [a, b, c, d, e, {bats, cash}, [name]] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(bats)
console.log(cash)
console.log(name)






