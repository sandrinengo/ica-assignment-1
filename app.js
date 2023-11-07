const express = require("express");
const debug = require("debug")("app");
const app = express();

const countdownRouter = require('./src/js/countdownRouter');
countdownRouter.CountDownStep();
app.get("/",(req,res)=>{
    res.send(countdownRouter.CountDownStep());
});

app.listen(3000, ()=>{
    console.log("Ctrl + C to end.");
})