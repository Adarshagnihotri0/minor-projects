//1.
// let a = [];
// let b = [];
// console.log(a==b); //false
// console.log(a===b); //false

//2.
// let a = [];
// let b = a;
// console.log(a==b) //true
// console.log(a===b) //true

//3.
// let [a] = [20];
// let [b] = ['20'];
// console.log(a[0] == b[0]); //false
// console.log(a[0] === b[0]); //false

//4.
// let z = [1,2,3,4];
// let a = {name: "anil"};
// console.log(...z); // 1 2 3 4

//5.
//console.log(typeof NaN) //number

//6.
// let data = 10- -10;
// console.log(data); //20

//7.
// const set = new Set([1,1,2,3,4]);
// console.log(set); //{1,2,3,4};

//8.
// let data = ({name:"Anil"})
// console.log(delete data.name); //true
// console.log(delete data) //false

//9.
// const data = ["Peter","Anil","sam"];
// const [y] = data;
// console.log(y) //Peter

//10.
// const data = ["Peter","Anil","sam"];
//  const [,y] = data;
//  console.log(y) //Anil

//11.
// const data = {name:"anil", age:29, skill: "JS"}
// const {name} = data
// console.log(name) //
//How to get data without . operator

//12.
//Merge data
// let data = {name:"anil", age:29, skill: "JS"};
// let info = {city:"Noida", email:"anil@gmail.com"};
// data = {...data, ...info};
// console.log(data);
// Output: {
//     name: 'anil',
//     age: 29,
//     skill: 'JS',
//     city: 'Noida',
//     email: 'anil@gmail.com'
//   }

//13.
// let data = {name:"anil", age:29, skill: "JS"};
// let info = {city:"Noida", email:"anil@gmail.com"};
// data = {data, ...info};
// console.log(data);
// Output: {
//     data: { name: 'anil', age: 29, skill: 'JS' },
//     city: 'Noida',
//     email: 'anil@gmail.com'
//   }

//14.
// let data = {name:"anil", age:29, skill: "JS"};
// let info = {city:"Noida", email:"anil@gmail.com", skill:"JAVA"};
// data = {...data, ...info};
// console.log(data);
// Output: {
//     name: 'anil',
//     age: 29,
//     skill: 'JAVA',
//     city: 'Noida',
//     email: 'anil@gmail.com'
//   }

//15.
// const name = 'Anil';
// console.log(name()) //TypeError name is not a function

//16.
// const result = false || {} ||  null;
// console.log(result); //{} it returns true value

//17.
// const result = false ||  null || '';
// console.log(result); // '' it returns true value

//18.
// const result = [] || 0 || true;
// console.log(result); // []

//19.
// console.log(Promise.resolve(5)); //Promise {fulfilled: < 5 > };

//20.
// console.log('❤️' == '❤️') //true

//21.
// JSON.parse();
// What this method will do
// A: Parses JSON to a javascript value
// B: Parses a javascript object to JSON
// C: Parses any javascript value to JSON
// D: Parses JSON to javascript object only

//22.
// let name = 'sidhu';

// function getName(){
//     console.log(name);
//     let name = 'anil';
// }
// getName(); //Error

//23.
// let name = 'anil';

// function getName(){
//     console.log(name);
// }
// getName(); //anil

//24.
// console.log(`${(x=>x)('I Love')} to Program`) //I Love to Program

//25.
// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues(...[1,2,3]));

//26.
// const name = 'code step by step';
// console.log(!typeof name === 'object'); //false
// console.log(!typeof name === 'string'); //false
// console.log(!typeof name === false); //true

//27.
// const name = "subscribe";
// const age = 27;

// console.log(isNaN(name)); //true
// console.log(isNaN(age)); //false

//28.
// let person = {name: "Anil"};
// Object.seal(person); //can only modify the current value but can't add new property
// console.log(person); // { name: 'Anil' }

//29.
// let data = [2,9,0,10];
// //remove first element
// data.shift();
// console.log(data); //[ 9, 0, 10 ]

//30.
// let data = [2,9,0,10];
// //remove last element
// data.pop();
// console.log(data); //[2,9,0]

//31.
// let a = 31;
//check even or odd
// console.log(a%2); //1

//32.
// let data = {name: "Anil"};
// delete data.name;
// console.log(data); //{}

//33.
// let data = "true";
// //convert data to boolean false value
// console.log(typeof !data) //false

//33.
// let data = "true";
// //convert data to boolean true value
// console.log(!!data) //true

//34.
//Difference between map and forEach
// MAP -> return something but forEach -> not return anything

//35.
// let data = ["anil","peter","bruce"];
// delete data[1];
// console.log(data); //[ 'anil', <1 empty item>, 'bruce' ]

//36.
// let data = ["anil","peter","bruce"];
// delete data[1];
// console.log(data.length); //3

//37.
// let a = [1,2,3,4];
// let b = [4,5,6];
// let c = [...a, ...b];
// console.log(c) // [1,2,3,4,4,5,6]

//38.
// let c = 3 ** 3;
// console.log(c) //27

//39.
// let a = 2;
// setTimeout(()=>{
//     console.log(a) //100
// },0);

// a = 100;

//40.
// let a = 2;
// let A = 30;
// console.log(A) //30

//41.
// let A10 = "ILIKE";
// // let 10A = "okay";
// console.log(A10) //ILIKE

//42.
// let a = "ilike";
// let b = 'ilike';
// console.log(a === b); //true

//43.
// let a = 1;
// let c = 2;
// console.log(--c === a); //true

//44.
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c) //false

//45.
// console.log(3*3); // 9
// console.log(3**3); // 27
// console.log(3***3); // error

//46.
// console.log(a); //undefined
// var a;

//47.
// console.log(b) //not defined

//48.
// console.log([[[[]]]]) //[ [ [ [] ] ] ]

//49.
// how to find OS name
//navigator.platform

//50.
//let for = 100; //reserved keyword

//51.
// function fruit(){
//     console.log(name); //undefined
//     console.log(price); // In hoising let should be defind before use

//     var name = "apple";
//     let price = 20;
// }
// fruit();

//52.
// for(var i=0; i<3;  i++){
//     setTimeout(()=>console.log(i),1); //3 3 3 because var is global scope
// }

//53.
// for(let i=0; i<3;  i++){
//     setTimeout(()=>console.log(i),1); //0 1 2 because let is local scope
// }

//54.
// console.log(+true); //1
// console.log(typeof +true); //number

//55.
// console.log(!"anil"); //false
// console.log(typeof("anil")); //string

//56.
// let data = "size";
// const bird = {
//     size: "small"
// }
// console.log(bird[data]); //small
// console.log(bird["size"]); //small
// console.log(bird.size); //small
// console.log(bird.data); //undefined

//57.
// let c = {name: "peter"};
// let d;

// d = c;
// c.name = "anil";
// console.log(d.name); //anil

//58.
// var x;
// var x = 10;
// console.log(x) //10

//59.
// var x;
// let x = 10;
// console.log(x) //Identifier 'x' has already been declared

//60.
// let a = 3;
// let b = new Number(3);
// console.log(a == b); //true
// console.log(a === b); //false

//61.
// let name;
// nae = {};
// console.log(name) //{}

//62.
// function fruit(){
//     console.log("Woof"); //woof
// }
// fruit.name = "apple";
// fruit() //woof

//63.
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1, "2")) //12

//64.
// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

//65.
// function getAge(...args){
//     console.log(typeof args) //object
// }
// getAge(21); //in JS typeof of array is object

//66.
// function getAge(){
//     'use strict'
//     age = 21;
//     console.log(age); //age is not defined because of use strict(hoisting not allowed)
// }
// getAge();

//67.
// const sum = eval("10*10+5");
// console.log(sum); //105

//68.
//How long cool_secret accessible?  //not removed untill local storage cleared
//sessionStorage.setItem('cool secret',123); 

//69.
// const obj = {1:"a", 2:"b",3:"c"};
// console.log(obj.hasOwnProperty("1")); //true
// console.log(obj.hasOwnProperty(1)); //true

//70.
// const obj = {a:"one", b:"two", a:"three"};
// console.log(obj) //{ a: 'three', b: 'two' }

//71.
// for(let i=1; i<5; i++){
//     if(i===3)continue;
//     console.log(i); //1 2 4
// }

//72.
// const foo = () => console.log("first");
// const bar = () => setTimeout(()=>console.log("second"));
// const buz = () => console.log("Third");

// bar();
// buz();
// foo();

// output: 
// Third
// first
// second

//73.
{/* <div onClick="console.log('first div')">
<div onClick="console.log('second div')">
<button onClick="console.log('button')">
</button>
</div>
</div> 
output: 
button 
second div
first div */}

//74.
// const person = {name:"anil"};

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21)); //anil is 21
// console.log(sayHi.bind (person,21)); //returns function --> correct way-> (sayHi.bind (person,21)())

// 75.
// function sayHi(){
//     return(() => 0)();
// }
// console.log(typeof sayHi()); //number

//76.
// function sayHi(){
//     return(() => 0);
// }
// console.log(typeof sayHi()); //function

//77.
// console.log(typeof typeof 1);

//78.
// const numbers = [1,2,3];
// numbers[6] = 11;
// console.log(numbers); //[ 1, 2, 3, <3 empty items>, 11 ]

//79.
// const numbers = [1,2,3];
// numbers[9999999999] = numbers;
// console.log(numbers); //[ 1, 2, 3, <6 empty items>, [Circular *1] ]

//80.
// Everything in Javascipt
// A. Primitive or Object -- correct anwer
// B. function or Object
// C. trick question! or Object
// D. number or object

//81.
// console.log(!!null); //false
// console.log(!!""); //false
// console.log(!!1); //true

//82.
// console.log(setInterval(()=>console.log('Hi'), 1000));
// console.log(setInterval(()=>console.log('Hi'), 1000));
// console.log(setInterval(()=>console.log('Hi'), 1000));

//83.
// console.log(..."anil"); //['a','n','i','l']

//84.
    // const firstPromise = new Promise((res, rej) => {
    //     setTimeout(res, 500, 'one');
    // })
    // const secondPromise = new Promise((res, rej) => {
    //     setTimeout(res, 100, 'two');
    // })

    // Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); //two

//85.
// let person = {name: "peter"};
// const members = [person];
// person = null;
// console.log(members); //[ { name: 'peter' } ]

//86.
// const person = {
//     name: "anil",
//     age: 27
// };
// for(const item in person){
//     console.log(item); // name age
// }

//87.
// let data = 3 + 4 + '5'
// console.log(typeof data); //string

//88.
// console.log(typeof 3 + 4 + '5') //number45

//89.
// console.log(typeof (3 + 4 + + '5')) //number

//90.
// console.log([] == []) //false

//91
// let data = [1,2,3].map(num => {
//     if(typeof num === 'number') return;
//     return num * 2;
// })
// console.log(data) // [ undefined, undefined, undefined ]

//92.
// function getInfo(member){
//     member.name = 'Anil';
// }

// const person = {name: "sarah"};
// getInfo(person);

// console.log(person); //{ name: 'Anil' }

//93.
// function Car(){
//     this.make = 'tata';
//     return { make: 'kia' };
// }
// const myCar = new Car();
// console.log(myCar.make); //kia

//94.
// (()=>{
//     let x = (y=10);
// })();
// console.log(typeof x); //undefined

//95.
// (()=>{
//     let x = y = 10;
// })();
// console.log(typeof y); //number

//96.

// (()=>{
//     let x = 10;
// })();

// (()=>{
//     let x = 10;
// })();

// console.log(typeof x) //undefined

//97.
// (()=>{
//     let x = y = 10;
// })();

// (()=>{
//     let x = y = 20;
// })();

// console.log(y) // 20

//98.
// let x = 100;
// (()=>{
//     var x = 20;
// })();
// console.log(x); //100

//99. 
// console.log(!true - true); //-1

//100.
// console.log(true + +"10"); //11