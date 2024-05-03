#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([{
            name: "firstQuestion",
            message: "What you want to add in your todo list?",
            type: "input"
        },
        {
            name: "secondQuestion",
            message: "Do you want to add more?",
            type: "confirm",
            default: "true"
        }]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
