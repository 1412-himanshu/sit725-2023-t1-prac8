const express = require("express");
const res = require("express/lib/response");
const app = express();

const addTwoNumbers = (x1, x2) => {
    return x1 + x2;
}

const multiplyTwoNumbers = (y1, y2) => {
    return y1 * y2;
}

app.get("/addTwoNumbers", (req, res) => {
    const x1 = parseInt(req.query.x1);
    const x2 = parseInt(req.query.x2);
    const result = addTwoNumbers(x1, x2);
    res.json({ statuscocde: 200, data: result });
});
console.log(addTwoNumbers(24, 16));


app.get("/multiplyTwoNumbers", (req, res) => {
    const y1 = parseInt(req.query.y1);
    const y2 = parseInt(req.query.y2);
    const result = multiplyTwoNumbers(y1, y2);
    res.json({ statuscocde: 200, data: result });
});
console.log(multiplyTwoNumbers(14, 6));

const port = 3000;
app.listen(port, () => {
    console.log("Hey I'm listening to port " + port);
})
