// conditionas and looping
// let age = 18;
// if ( age <18)
//     console.log("oops");
// else console.log("boom");


// console.log(Number.isNaN(Number("hi")));
// let day =2;

// switch (day+100)
// {
//     case 0: console.log("Sunday");break;
//     case 1: console.log("Monday");break;
//     case 2: console.log("Tuesday");break;
//     case 3: console.log("Wednesday");break;
//     case 4: console.log("Thursday");break;
//     case 5: console.log("Friday");break;
//     case 6: console.log("Satday");break;
//     default : console.log("oooops");
    
    
// }

//loops
// const isPrime = (num)=>
// {
//     if( num<=1) return false;
//     for(let i =2 ; i< num ; i++)
//     {
//         if(num %i ==0) return false

//     }
//     return true;

// }
// let n =0;
// let num = 2;
// while(n <10)
// {
//     if(isPrime(num))
//     {
//         console.log(num);
//         n++;
//     }
//     num++;
// }


// do{
//     console.log("hey")

// }while(10);
// let i =1;
// do
// {
//     console.log("oops");
//     if( i ==3) break;
//     i++;
// }while(1);


// // 1 - 10 even numbers 

// for(let i =0 ; i<10 ; i++)
// {
  
//     if( i % 2 !== 0) continue;
//     console.log(i);
  
// }


// // pattern problem 
// let n = 59;
// let str = "";
// for( let i =1 ; i<= n ; i++)
// {
//     for( let j =0 ; j<i ; j++)
//     {
// //         str+="#"
        
// //     }
// //     str+="\n"
// // }
// // console.log(str)

// // fizz / buzz / fizzbuzz

// // for( let i =0 ; i <=100 ; i++)
// // {
// //     if( i %5 == 0 && i %3 == 0) console.log("fizzbuzz");
// //     else if(i % 5 == 0) console.log("buzz");
// //     else if (i%3 == 0 ) console.log("Fizz");
// //     else console.log(i);
// // }


// let str = "";
// for( let i = 0 ; i < 8 ; i++)
// {
//     for(let j =0 ; j < 8 ; j++){
    
//         if(! (i % 2) )
//         {
//             str+=(j%2==0?" ":"#");

//         }
//         else
//         {
//             str+=(j%2==1?" ":"#");
//         }
//     }
//     str+="\n";
// }
// console.log(str)



// const sayHi = function()
// {
//     console.log("hi");
//     return 1;
//     console.log("oops")
// }
// console.log(sayHi());
// if(1)
// {
//     let a=10;
//     console.log(a);
    
// }      //error
// console.log(a);
// if(1)
// {
//     var a=10;
//     console.log(a); //only functions treated as a new block
    
// }
// console.log(a);
// console.log(a);
// var a =10 ;
// console.log(a);
    

// function oops()
// {
//     var a=10;
//     console.log(a);
    
// }
// oops();
// console.log(a);
// var a=30;
// console.log(a);

// let a=10
// {
//     let a=20;
//     console.log(a);
    
// }
// console.log(a);

// var a=10 ;
// {
//     var a=100;
//     console.log(a);
    
// }
// console.log(a);
// Arrow functions
// const square = x=> {x*x};
// console.log(square(22));

// calstack
// function o()
// {
//     return k()
// }
// function k()
//     {
//         return o()
//     }
//     k();

// optional argumnets 

// const  oop =(a,b,c) =>
// {
//     console.log("hurray !");
    
// }
// oop(1,3)
// const a = (b=3,c)=>
// {
//     return b+c
// }
// console.log(a(1,1,1,1));


    

// const chai = ()=>
// {
//     let price = 10;
//     return ()=> console.log(price)
// } 
// const biscuit = ()=>
// {
//     let price = 5;
//     return () => console.log(price)
// }
// let a = chai();
// let b = biscuit();
// a();
// b();

// closure
// const clicker = (color)=>{
//     return ()=>document.body.style.backgroundColor="Green";
// }


// document.getElementById("green").onclick =clicker()









