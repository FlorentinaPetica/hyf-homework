const { json } = require("express");
const express = require("express");
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
    const requestedNum = Object.values(req.query).map(num => Number(num))
    const addition = requestedNum.reduce((previousValue, currentValue) => previousValue + currentValue)
    res.send({result: `${addition}`})
})

app.get("/calculator/subtraction", (req, res) => {
    const requestedNum = Object.values(req.query).map(num => Number(num))
    const subtraction = requestedNum.reduce((previousValue, currentValue) => previousValue - currentValue)
    res.send({result: `${subtraction}`})
})

app.get("/calculator/multiply", (req, res) => {
    const requestedNum = Object.values(req.query).map(num => Number(num))
    const multiply = requestedNum.reduce((previousValue, currentValue) => previousValue * currentValue)
    res.send({result: `${multiply}`})
})

app.get("/calculator/division", (req, res) => {
    const requestedNum = Object.values(req.query).map(num => Number(num))
    const division = requestedNum.reduce((previousValue, currentValue) => previousValue / currentValue)
    res.send({result: `${division}`})
})

app.post("/calculator/add", (req, res) => {
    const requestedNum = Object.values(req.body).map(num => Number(num))
    const addition = requestedNum.reduce((previousValue, currentValue) => previousValue + currentValue)
    res.send({result: `${addition}`})
})

app.post("/calculator/subtraction", (req, res) => {
    const requestedNum = Object.values(req.body).map(num => Number(num))
    const subtraction = requestedNum.reduce((previousValue, currentValue) => previousValue - currentValue)
    res.send({result: `${subtraction}`})
})

app.post("/calculator/multiply", (req, res) => {
    const requestedNum = Object.values(req.body).map(num => Number(num))
    const multiply = requestedNum.reduce((previousValue, currentValue) => previousValue * currentValue)
    res.send({result: `${multiply}`})
})

app.post("/calculator/division", (req, res) => {
    const requestedNum = Object.values(req.body).map(num => Number(num))
    const division = requestedNum.reduce((previousValue, currentValue) => previousValue / currentValue)
    res.send({result: `${division}`})
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
