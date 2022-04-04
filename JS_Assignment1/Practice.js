
/*
const person = {
    name: "Noam Chomsky",
    age: 92
};

function fun_person(person){
    console.log(`Name is ${person.name} and age is ${person.age}`);
}

fun_person(person);*/

//Assignment1-Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.


let get = function (){
    return "hello";
}

function f2(name,get){
    return  `${get()} ${name}`;  //using template literal
}
var x = f2("JavaScript",get);

console.log(x)


//Assignment1-Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

let str = (fname,lname) => fname.slice(0,1) + lname.slice(0,1) ;

console.log(str("Roger","Waters"));


