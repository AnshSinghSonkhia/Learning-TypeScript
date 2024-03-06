# Learning TypeScript with React.js

> TypeScript is a superset of JavaScript

- TypeScript adds additional syntax to JavaScript to support a tighter integration to the editor.
- Helps to catch errors early.
- TypeScript code converts to JavaScript, which runs anywhere JavaScript can run. (Browser, Node.js / Dino, and in our apps.)

> Hence, TypeScript is highly trustable.

- TypeScript understands JavaScript and uses type inference to give us great tooling without additional code.

# Create a React with TypeScript app.

```shell
npm create vite@latest
npm install
npm run dev
```
    - type project name or `.` for current folder.
    - choose `react`
    - choose `typescript` 

# Converting an existing app to TypeScript

```shell
npm install --save typescript @types/node @types/react @types/react-
dom @types/jest
```

# Types in JavaScript

```js
let name = "Ansh Singh Sonkhia";
```

> let name: string

# Types in TypeScript

```tsx
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
```

> let name: string

### Other Types in TypeScript:

- boolean
- string
- number
- Object
- array
- tuple
- undefined
- null
