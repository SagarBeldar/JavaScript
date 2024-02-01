// console.log("Hello");

// let para=document.getElementById("para");
// console.log(para);
// console.dir(para)

// console.dir(document)

// let p=document.getElementsByTagName("p");
// console.dir(p);

// let element=document.querySelector("p");
// console.dir(element);

// let allelement=document.querySelectorAll("p");
// console.dir(allelement)

/*let h2=document.querySelector("h2");

console.log(h2.innerText);

h2=h2.innerText+ "learn with sagar beldar"

console.log(h2);*/

// let div=document.querySelectorAll(".box");

// console.log(div[0]);

// div[0].innerText="New value by user dynamically allocated 1";
// div[1].innerText="New value by user dynamically allocated 1";
// div[2].innerText="New value by user dynamically allocated 1";
 
//alternative 

// let idx=1;
// for (const element of div) {
//     // console.log(element.innerText);
//     element.innerText=`New value of box ${idx}`;
//     idx++;
// }


//Events in JS
// let btnHandler=document.querySelector("#btn");
// console.log(btnHandler);

// btnHandler.onclick=()=>{
//     //console.log("btnclick many times");
//     num=10;
//     for(i=0;i<num;i++){
//         console.log(i);
//     }
// }

/*let btnHandler=document.querySelector("#btn");
console.log(btnHandler);

let lightmode="light";
let body=document.querySelector("body");
btnHandler.addEventListener("click",()=>{
  if(lightmode==="light"){
      lightmode="dark";
    //   body.style.backgroundColor="black";
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    lightmode="light";
    // body.style.backgroundColor="White";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(lightmode);
})*/
// console.log("object");
// let hello=()=>{
//   console.log("helhgkuygkufuyflo");
// }
// setTimeout(hello,4000)


//CallBack Hell
/*function getData(dataId,getNesxtdata){
  setTimeout(() => {
    console.log("data",dataId);
    if(getNesxtdata){
      getNesxtdata();
    }
  }, 2000);
}

getData(1,()=>{
  getData(2,()=>{
    getData(3);
  });
})*/

//Promise ==>1 
console.log("object");
/*const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("I am Promise");
    // resolve("Promise Fullfilled")
    reject("network err")
  })
}

let prromise=getPromise();

prromise.then((res)=>{
  console.log("promised done",res);
});

prromise.catch((err)=>{
  console.log("rejected",err);
}) */


//Promise ==>2

/* const asyncFunc=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(" promise has pass");
       resolve("success")
      //reject("failure")
    }, 4000);
  })
}
const asyncFunc2=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(" promise has pass");
       resolve("success")
     // reject("failure")
    }, 4000);
  })
}

let p1=asyncFunc();
p1.then((res)=>{
  console.log(res);
  asyncFunc2().then((res)=>{
    console.log(res);
  })
})

p1.catch((err)=>{
  console.log("nework issue",err);
}) 

*/

async function fun1(){
  console.log("sagar beldar");//async function always returns a promise
}

function fun2(){
  console.log("sagar beldar");
}

function asyncFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(" promise has pass");
       resolve("success")
     // reject("failure")
    }, 4000);
  })
}

async function asyncFunc3 (){
  await asyncFunc2();
  console.log("sagar hello");
  await asyncFunc2();
}