//primitive

// 7 types: String, Number, Boolean, Null, undefined,Symbol ,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id=Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId );  =>false bcoz  Each call to Symbol() creates a unique and distinct symbol, regardless of whether the description passed to it is the same.
                                     // Therefore, id and anotherId are referring to different symbols, hence id === anotherId evaluates to false.
// const bigNumber = 32138943473745378913827390n
// console.log(bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['shaktiman','naagraj','doga'];
let myObj = {
    name:"kalpana",
    age:20,
}
// ob+jects are always within curly braces and in key:value form

// we can treat a function as variable in js.
 

// let's make a function
const myFunction = function(){
    console.log("Hello world");

}

// console.log(typeof bigNumber);   =>undefined
// console.log(typeof id);          =>symbol
// console.log(typeof outSideTemp); =>object
// console.log(typeof scoreValue);  =>number
// console.log(typeof userEmail);   =>undefined
// console.log(typeof myFunction);  =>function
// console.log(typeof heros);       =>object


// *******************************************************************************

// Stack(Primitive), Heap(Non-Primitive)
// here in stack we get only copy of object while in heap we get reference of original object.

let myChannel = "kalpana123"
let anothername = myChannel
anothername = myChannel
myChannel = "sk2004"
console.log(myChannel);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ylb"
}
let user2 = user1
user2.email = "kalpana@google.com"

console.log(user1.email);
console.log(user2.email);


