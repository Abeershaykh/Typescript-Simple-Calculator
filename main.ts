#! /usr/bin/env node
console.log("I will make calculator");
// here I will make my calculator
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter first number:", type: "number", name: "firstNumber" },
  { message: "Enter second number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform calculation", 
    type: "list", 
    name: "operator", 
    choices:["Addition","Subtraction","Multiplication","Division", "Power"]  }
]);
// await - means wait, we can not proceed without inquirer

if (answer.operator === "Addition"){
    console.log("Your value is:", answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Subtraction"){
    console.log("Your value is:", answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multiplication"){
    console.log("Your value is:", answer.firstNumber * answer.secondNumber)
} else if (answer.operator === "Division"){
    console.log("Your value is:", answer.firstNumber / answer.secondNumber)
} else if (answer.operator === "Power"){
    console.log("Your value is:", answer.firstNumber ** answer.secondNumber)
} else console.log('please select a valid operator')