import express from "express"

const app = express();

const PORT = 3000;


console.log("hi")
console.log('Hello World!');

app.listen(PORT, () => {
    console.log(` Server listening on  PORT`);
})