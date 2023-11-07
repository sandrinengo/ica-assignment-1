const express = require("express");
const readLineSync = require("readline-sync");
const countdownRouter = express();

function CountDownStep() {
    let number = readLineSync.questionInt("Please enter positive number:");
    if (number > 0) {
        let step = readLineSync.questionInt("Please enter step:");
        if (step > 0) {
            let countdown = 0;
            while (countdown <= step) {
                console.log(number);
                number = number - step;
                countdown++;
            }
        }
    }
}

module.exports = {
    CountDownStep
};