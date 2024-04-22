#! /usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer";

console.log(chalk.blackBright.bgYellow("\n\t**** Welcome to InshaAli Currency Converter ****\n"));

//Define the list of currencies and their exchange rates
let exchange_rate: any = {
  "USD": 1, //Base currency
  "EUR": 0.9, //European currency(Euro)
  "JYP": 113, // Japnese currency (Yen)
  "CAD": 1.3, // Canadian Dollar
  "AUD": 0.65, // Australian Dollar   
  "PKR": 277.70, // Pakistan Rupees
//Add more currencies and their exchange rates here
}

//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.blueBright("Select the currency to convert from:"),
    type: "list",
    choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
  },
  {
    name: "to",
    message: chalk.blueBright("Select converted currency to convert into:"),
    type: "list",
    choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
  },
  {
    name: "amount",
    type: "input",
    message: chalk.blue("Enter the amount to convert:"),
  }
]);

//Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from];
let to_amount = exchange_rate[user_answer.to];
let amount = user_answer.amount
//Formula of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

//Display the converted amount
console.log(`Converted amount = ${chalk.green(converted_amount.toFixed(2))}`);