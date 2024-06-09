// Immediately Invoked Function Expression (IIFE)

(
    function chai(){
        console.log("Hello world !");
        // we don't use return statement in IIFE
        // named iife
    }
)();

(
    (name) => 
        console.log("This comes from arrow function !", name)
    // simple iife
)('Satyam'); // we can use arrow functions


// Execution Environments
/*
    1. Global Execution Context : this default refers to this
    2. Function Execution Context 
    3. Eval Function Execution Context 

    Js code runs in memory creation phase (memory allocation occurs) and execution phase (execution occurs)
    Execution context is created in two phases:
    1. Creation Phase
    2. Execution Phase

    Creation Phase:
    1. Creation of Global Object
    2. Creation of this
    3. Creation of Outer Environment
    4. Creation of Memory Space for Variables and Functions (Hoisting)
    5. Creation of Scope Chain

    Execution Phase:
    1. Execution of Code Line by Line

    Execution Context Stack:
    1. Global Execution Context
    2. Function Execution Context
    3. Eval Function Execution Context

    Execution Context Stack is also known as Call Stack
    Call Stack is a stack data structure
*/
