 //this - window 
//  console.log(this); //global object / window


 //function -window
//  function bkchod (){
//     console.log(this);//refernce of global object 
//  }
//  bkchod();


 //method - object (aisa function jo object ke andaer ho method hota h)
 var obj = {
    name : function(){
        console.log(this)
        // console.log(this.age);
    },
    age: 35,
    dob: "10/04/2000"

 }
 
//  obj.name();


 //function inside method (es5) - window
 var obj2 = {
    sayName: function(){
        console.log(this); // object 
        console.log(this.age); 

        function childfnc(){
            console.log(this); //window
            console.log(this.age); //undefined
        }
        childfnc();
    },
    age : 25
 }

//  obj2.sayName();


 //function inside method (es6)
 var obj3 = {
    sayName : function(){
        console.log(this);
        const child = () => {
            console.log(this); //parent ki property leta hai dhyan rakhna 
        }
        child(); 
    },
    age : 90

 }
 obj3.sayName();

 //constructor function me this ki value -  new black object 
 function add(){
    console.log(this);
 }

 const add2 = new add();
 console.log(add2);
