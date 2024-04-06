#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "type first number",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "type second number",
    },
    {
        name: "operator",
        type: "list",
        message: "select one of the operator",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
