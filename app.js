import express from "express"

const app = express();

const PORT = 3000;


console.log("hi")

app.listen(PORT, () => {
    console.log(` Server listening on  PORT`);
})