

// console.log("Hello World");
// setTimeout(() => {
    
//     console.log("I am inside setTimeout");
    
// }, 3000);

// console.log("I am after  setTimeout");

// setInterval(() => {
//     console.log("Hi i am Shayan");
    
// }, 300);


// Error Handling in Js 


// 1 : compiler time error
// sytnax error

// console.log(1;

// 2: Run Time Error 
//   console.log(notedefind);


// How to Handle Error 
  
// try {
//       console.log(a);
      
// } 
// catch (error) {
//     throw new Error ("First Declear the The variable ")
//     // console.log("Detect Error ")
    
// }
  

// Exvute any time & also error come 
// finally{
//     console.log("i am finally bloack");
    
// }


// Promise 
  // this is an object 
  //  by this  we handle the behavior of async
  // there is two state resolve and reject 


// let firstpromise = new Promise((resolve, reject) => {
//  console.log("HI I am inside Promise");
// //  resolve()
// reject(new Error("First Declear the The variable "));

    
// })


// let asyncCOde = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am inside setTimeout");
        
//     }, 2000);
//     resolve(1);
// })

// let promise1 =new Promise((resolve, reject) => {
//     let succes = false
    
//     if(succes){
//         resolve('Promise fullfilled ')
//     }else{
//         reject('Promise rejected ')

//     }
// })// when promise  fullfild 
// promise1.then((message)=>{
//     console.log("The Message is " +  message);
    
// }).catch((e)=>{
//     console.log("Error" + e);
    
// })


