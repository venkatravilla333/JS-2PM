

var arr1 = [1, 2, 3, 4, 5]
var arr2 =  arr1

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//how to add new values to array

//staring
// arr.unshift(0)

//ending
// arr.push(6)
// console.log(arr)

//any where
// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(3, 0, 6)
// console.log(arr)

//How to delete array items

// arr.shift()
// arr.pop()
// arr.splice(arr.length-1, 1)
// arr.splice(0, 3, 'hi')
// console.log(arr)

//How to delete all items from array

// arr1.length = 0
// arr1.splice(0, arr1.length)
//  arr1 = []

// console.log(arr1)
// console.log(arr2)

// var arr = [1, 2, 3, 4, 5, 2, 2]
// var arr = [{course: 'react'}, {course: 'java'}, {course: 'react'}]

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

// var res = arr.find((obj) => {
//   return obj.course === 'html'
// })
// console.log(res)
// var res = arr.findIndex((obj) => {
//   return obj.course === 'react'
// })
// console.log(res)
// var res = arr.findLastIndex((obj) => {
//   return obj.course === 'html'
// })
// console.log(res)


//How to loop arr

// var arr = [1, 2, 3, 4, 5]

//without loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for (var value of arr) {
//   console.log(value)
// }


// var res1 = arr.forEach((v, i) => {
//   // console.log(v*100)
//   return v*100
// })
// console.log(res1)

// console.log(arr)

// var res2 = arr.map((v) => {
//   return v*100
// })
// console.log(res2)

//How to merge two or more arrays into single array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)

// var combineArr = arr1.concat(arr2) //ES-5
// var combineArr = [...arr1,...arr3,...arr2] //ES-6
// console.log(combineArr)


//How to convert array into string

// var arr = [1, 2, 3, 4, 5]
// console.log(arr, typeof arr)

// var str = arr.join('*')

// console.log(str, typeof str)

// var res = str.split()
// console.log(res, typeof res)

// var arr = [1, 2, 3, 4, 5]

// var res = arr.reduce((cum, cur) => {
//   return cum + cur
  
// }, 0)

// console.log(res)


// var arr = [1, 2, 3, 4, 5, 3, 6, 3]
// console.log(arr)

// console.log(new Set(arr))

// var uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

// var uniqueArr = []

// function removeDuplicates(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//       uniqueArr.push(value)
//     }
//   }
// }

// removeDuplicates(arr)

// console.log(uniqueArr)


//How to flatten array

// var arr = [1, 2, 3, [10, 20], [100, 200, [1000, 2000]]]

// var flattenArr = arr.flat(Infinity)
// console.log(flattenArr)
// var flattenArr = []

// function flattenFun(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flattenFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }

// flattenFun(arr)

// console.log(flattenArr)

//Sorting

//primtives

// var arr = ['sachin', 'dhoni', 'kohi', 'rahul']
// var arr = [8, 3, 5, 1, 2]
var arr = [8, 3, 5, 1, 12]
// var arr = [{ course: 'node' }, { course: 'react' }, { course: 'css' }]
// console.log(arr)

// var ASO = arr.sort()

// // console.log(arr)
// console.log(ASO)
// var DSO = arr.reverse()
// console.log(DSO)

// var ASO = arr.sort((a,b) => {
//   if (a > b) {
//     return -1
//   } else {
//     return 1
//   }
// })

// console.log(ASO)

// var ASO = arr.sort((obj1, obj2) => {
//   if (obj1.course > obj2.course) {
//     return -1
//   } else {
//     return 1
//   }
// })
// console.log(ASO)

// for (var i = 0; i < arr.length; i++){
//   for (var j = i + 1; j < arr.length; j++){
//     if (arr[i] < arr[j]) {
//       var temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }

// console.log(arr)

// var arr = [1, 2, 3, 4, 5]
// var arr = [{name: 'sachin', age: 40}, {name: 'kohli', age: 35}, {name: 'gill', age: 22}]
// console.log(arr)

// var filtredArr = arr.filter((person) => {
//   return person.age < 30
// })

// console.log(filtredArr)

// function test() {
//   console.log(arguments, Array.isArray(arguments))
//   var res = Array.from(arguments)
//   console.log(res, Array.isArray(res))
// }

// test(1,2,3,4,5)

var originalArr = ['sachin', { road: 101 }, () => { }]

// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy
// var copiedArr = [...originalArr] //shallow copy

copiedArr[0] = 'kohli'
copiedArr[1].road = 201
console.log(originalArr)
console.log(copiedArr)









