#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 123;
let pinCode = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinCode.pin === myPin) {
    console.log("Access Granted");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "balance inquiry", "deposit"]
        }
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter you amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry ! insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining Balance is ${myBalance}`);
        }
    }
    if (operationAns.operation === "balance inquiry") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (operationAns.operation === "deposit") {
        let depositCash = await inquirer.prompt([{
                name: "cashIn",
                type: "number",
                message: "Enter your amount"
            }]);
        myBalance += depositCash.cashIn;
        console.log(`Your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin");
}
