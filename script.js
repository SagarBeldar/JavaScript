// console.log("hello world");
// a=10;
// a=a+1;
// console.log(a);
// price=99,999;
// b="hello world";
// console.log(price);

// isFollow=true;

// //Function
// const student =()=>{
//     fullName=Sagar,
//     age=24,
//     cgpa=6.61,
//     isStudent=true
// }


// //Function
// const student2 =()=>{
//     fullName:aakash;
//     age:24;
//     cgpa:6.61;
//     isStudent:true
// }

// //This is object (key:value)
// const student1 ={
//         fullName:"Yash",
//         age:24,
//         cgpa:6.61,
//         isStudent:true,
    
// }
// //accessing key valure of object
// console.log(student1.fullName);
// console.log(student1.isStudent);
// console.log(student1["age"]);
// console.log(student1.cgpa);

// //for incre. value of key

// student1.age=student1.age+1;
// console.log(student1.age);
// student1["age"]=student1["age"]+1;
// console.log(student1.age);

// const Profile={
//     fullName:"Sagar Beldar",
//     follow:true,
//     Posts:195,
//     follower:4,
//     Description:"For Education related account"
// }

// console.log(Profile);

//Cnditional Stements

// let age =25;
//  if(age>18 || age<21){
//     console.log("You can vote");
//  }

//  alert("hello");

//  let name_=prompt("hello sagar");
//   console.log(name_);

//   let num=prompt("Enter a Number");
//   if(num%5==0){
//     console.log(num," is multiple by 5");
//   }
//   else{
//     console.log(num, "Not multiple by 5");
//   }

//JS Example-01
// let num=prompt("Enter Your Marks...");

// if(num>=90 && num<=100){
//     console.log("Grade A");
// } else if(num>=70 && num<=89){
//     console.log("Grade b");
// } else if(num>=60 && num<=69){
//     console.log("Grade C");
// } else if( num>=50 && num<= 59){
//     console.log("Grade D");
// }else if (num<=49){
//     console.log("Fail");
// }else{
//     console.log("Print valid Marks out of 100");
// }
//JS Example-02
//Print first n(10) natural no.

// let num=10;
// let sum=0;
// for(i=1;i<=num;i++){
//     console.log(i);
//     sum=sum+i;
// }
// console.log(sum);

//JS Example-03

// let getNo=25;
// let userNAme=prompt("Enter Number :")

// while(userNAme !=getNo){
//     userNAme=console.log("No. not match. Enter Again :");
// }
//  console.log("Congratulation No. enter is matched");

// console.log("sagar\nbeldar"); 
// console.log("sagar\tbeldar");

// let str1="sagar\nbeldar"; 
// console.log(str1.length); //Escape chrarcter have lenth only single charac.

//Template Literals

// let str=`this is the sum of ${1+2+3}` 
// console.log(str);

// const pen={
//     fullName:"Trimax",
//     color:"Blue",
//     Price:20,
// }

// console.log("The ",pen.fullName,"in",pen.color,"color is of",pen.Price,"rupees");
//console.log(`The ${pen.fullName} in ${pen.color} color is of ${pen.Price} rupees`);

//JS Example-03

// let userName=prompt("Enter Your Full Name Without Space ");
// let printName= "@"+userName+userName.length;
// console.log(printName);

//for of method -

/*let heroes=["spiderman","superman","hulk","thor","antman"];

for (const hero of heroes) {
    console.log(hero.toUpperCase());
}

for (const iterator of object) {  
}*/
//JS Example-04

/*let marks=[85,97,44,37,76,60];
let element=0;
for (let index = 0; index < marks.length; index++) {
     element += marks[index];
}
console.log(element/6);

let marks1=[85,97,44,37,76,27];
let element1=0;
for (const val of marks1) { 
    element1+=val;
}
console.log(element1/6);*/

//JS Example-05 - calculate 10% offer on price

/*let Products=[250,645,300,900,50];
let totalDisc=0
for(i=0;i<Products.length;i++){
    let disc_offer=Products[i]*(10/100);
     let price=Products[i]-disc_offer;
    totalDisc+=price;
    console.log(`The 10% disc of ${Products[i]} is ${disc_offer} and Price after offer is ${price}`);

}
console.log(`This is total sum of 10% disc =${totalDisc}`);*/

//JS Example-06

/*let Companies=["Bloomberg","MIcrosoft","Uber","Google","IBM","Netflix"];
console.log(Companies);

//remove first compnay from list
Companies.shift();
console.log(Companies);
console.log("Delete first company",Companies.splice(0,1));

//remove Uber and add ola
Companies.splice(2,1,"OLA")
console.log(Companies);

//Add Amazon at the end
Companies.push("Amazon");
console.log(Companies);

let num=10;
console.log(num);

let num=12;//Cannot redeclare block-scoped variable 'num'

let Mul=(a,b)=>{
    return a*b;
}

Mul=21;*/

//JS Example-07
 //create a function with para string and count no. of vowels in it

 /*function countVowel(str) {
    let count=0;
    for (const char of str) {
        // console.log(char);
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
        count++;
    }
    console.log(count);
 }

 countVowel("sagarbeldara");

 function countVowel_1(str1){
    let count=0;
    for(i=0;i<str1.length;i++){
        if(str1[i]==="a" || str1[i]==="e" || str1[i]==="i" || str1[i]==="o" || str1[i]==="u")
        count++;
    }
    console.log(count);
 }

 countVowel_1("apnacollegeaeiohg")

 const noVowel=(str1)=>{
    let count=0;
    for(i=0;i<str1.length;i++){
        if(str1[i]==="a" || str1[i]==="e" || str1[i]==="i" || str1[i]==="o" || str1[i]==="u")
        count++;
    }
    console.log(count);
 }

 noVowel("aakashaaaaa")*/

//for Each Method -callback function 

/*let array=[1,2,3,4,534,3,4,56,7,8,9];

let ste=["asc","eda","fgh","ghj"];

ste.forEach( function printVal(val) {
    console.log(val.toUpperCase())
});

array.forEach( function printVal(val) {
    console.log(val);
})

array.forEach((x,idx,list) => {
    console.log(x,idx,list);
});

ste.forEach((str,num,strlist)=>{console.log(str.toUpperCase(),num,strlist)});*/

//JS Example-08-given array print square of each value using forEach

/*let array=[1,2,3,4,5,6,7];

array.forEach(element => {
    console.log(element**2);//(element*element)
});*/

//Filter method

/*let array=[1,2,3,4,5,6,7,8];

let newArray=array.filter(val=>{
    //return val%2 !=0;
    return val>3
})

console.log(newArray);*/

//reduce method
