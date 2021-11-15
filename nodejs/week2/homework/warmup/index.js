const express = require("express");
const app = express();

/*----------------------------------------------------------------------------------------------------------------
Add 2 routes to your index.js:
GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10
------------------------------------------------------------------------------------------------------------------*/

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    const {firstNum, secondNum} = req.query

    res.send(`${parseInt(firstNum) + parseInt (secondNum)}`)
});

app.get("/numbers/multiply/:firstNum/:secondNum", (req, res) => {
    const {firstNum, secondNum} = req.params
    console.log(req.ip)
    res.send(`${parseInt(firstNum) * parseInt (secondNum)}`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
