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

let div=document.querySelectorAll(".box");

// console.log(div[0]);

// div[0].innerText="New value by user dynamically allocated 1";
// div[1].innerText="New value by user dynamically allocated 1";
// div[2].innerText="New value by user dynamically allocated 1";
 
//alternative 

let idx=1;
for (const element of div) {
    // console.log(element.innerText);
    element.innerText=`New value of box ${idx}`;
    idx++;
}