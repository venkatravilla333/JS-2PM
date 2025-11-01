// console.log('hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 3000)

// console.log('hello')

// setTimeout(() => {
//   console.log('Timer-2')
// }, 0)

// Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

// console.log('bye')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 1000)

// console.log('Bye bye')

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // var data = 'sachin' //data from db
//     var data = num * num;
//     displayData(data);
//   }, 4000);
// }

// fetchData(2, function displayData(data1) {
//   console.log(data1);
//   fetchData(data1, function displayData(data2) {
//     console.log(data2);
//     fetchData(data2, function displayData(data3) {
//       console.log(data3);
//       fetchData(data3, function displayData(data4) {
//         console.log(data4);
//       });
//     });
//   });
// });


//promises


// function fetchData(num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }

// fetchData(2).then((data1)=> {
//   console.log(data1)
//   return fetchData(data1)
// }).then((data2)=> {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3)=> {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4)=> {
//   console.log(data4)
// })


// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }



// async function displayData() {
//   var data1 =  await fetchData(2)
//   console.log(data1)
//   var data2 =  await fetchData(data1)
//   console.log(data2)
//   var data3 =  await fetchData(data2)
//   console.log(data3)
//   var data4 =  await fetchData(data3)
//   console.log(data4)
 
// }

// displayData()


// var pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR-1')
//   }, 2000)
// })
// var pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR-2')
//   }, 4000)
// })
// var pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR-3')
//   }, 3000)
// })

// Promise.all([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.allSettled([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.race([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.any([pr1, pr2, pr3]).then((res)=>{console.log(res)})

var getdataBtn = document.getElementById('getdata')

var parent = document.getElementById('parent')

function getdataBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
     return res.json()
    }).then((data) => {
      data.forEach((obj) => {
      var para = document.createElement('p')
        console.log(para)
        para.textContent = obj.title
        parent.appendChild(para)
     })
    console.log(data)
    }).catch((err) => {
    console.log(err)
  })
}

getdataBtn.addEventListener('click', getdataBtnFun)

//send data

var newObject = {
  userId: 200,
  title: 'my title',
  body: 'my body'
}

var senddataBtn = document.getElementById('senddata')

function senddataBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(newObject)
  }).then((res) => {
    return res.json()
  }).then((data)=>{
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

senddataBtn.addEventListener('click', senddataBtnFun)

//update data

var updateObject = {
  userId: 300,
  title: 'hello ap',
  body: 'this is bosy'
}

var updatedataBtn = document.getElementById('updatedata')

function updatedataBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(updateObject)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data)=>{
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

updatedataBtn.addEventListener('click', updatedataBtnFun)

//delete data


var deletedataBtn = document.getElementById('deletedata')

function deletedataBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/20', {
    method: 'DELETE',
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data)=>{
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

deletedataBtn.addEventListener('click', deletedataBtnFun)








