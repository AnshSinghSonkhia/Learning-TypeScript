import React from 'react';
//import { useState } from 'react'
import './App.css';

let name: string = "Ansh Singh Sonkhia";
let name2: string;

//name2 = 5;        //This will give error.

name2 = "Heyy Boss ;>"
let age: number;

let isFruit: boolean;   // It can be TRUE or FALSE

let hobbies: string[];      // Array of string
let complex: number[];      // Array of number

let role: [number, string];     // Tuple - that can contain 1 number and 1 string.

role = [5, "lamba"];

type Person = {
    name: string;
    age: number;
    sex?: string;   // This property is optional.
}          
// It's a good practice to keep the first letter of type ---> Capital

let person: Person = {
  name: "Ansh",
  age: 5,
};

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        Helo Worlssssss
      </div>
    </>
  )
}

export default App
