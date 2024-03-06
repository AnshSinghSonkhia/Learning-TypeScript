import React from "react";
//import { useState } from 'react'
import "./App.css";

let name: string = "Ansh Singh Sonkhia";
let name2: string;

//name2 = 5;        //This will give error.

name2 = "Heyy Boss ;>";
let age: number;

let isFruit: boolean; // It can be TRUE or FALSE

let hobbies: string[]; // Array of string
let complex: number[]; // Array of number

let role: [number, string]; // Tuple - that can contain 1 number and 1 string.

role = [5, "lamba"];

type Person = {
  name: string;
  age: number;
  sex?: string; // This property is optional.
};
// It's a good practice to keep the first letter of type ---> Capital

let person: Person = {
  name: "Ansh",
  age: 5,
};

// Assigning types in TypeScript

let lotsOfPersons: Person[];

// Union

let contact: string | number;

contact = 3; // working
contact = "yfguyb"; // working


/* 
	Function Types - 2 ways
*/


// Method 1
function printName(name: string){
	console.log(name);
};

// Method 2
let printName2: Function;

// better way --->

let printName3: (name: string) => void;

// It will take a string type input & will return void (nothing).

let degree: any;	// NOT recommended to use.

// When you don't know the type it is going to be, it is recommended to use:

/*	unknown type	*/

let degree1: unknown;

// it also takes any type


// never type

let kaka: (name: string) => never;























function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">Helo Worlssssss</div>
    </>
  );
}

export default App;
