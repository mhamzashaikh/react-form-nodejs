const express = require("express");
const bodyParse = require("body-parser");

const app = express();
const port = 3001;


app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());


let formData = [];
app.post("/form", (req,res)=>{
    formData.push(req.body);
    console.log(req.body);
})


app.get("/form", (req, res)=>{
    res.json(formData);

});


app.listen(port, ()=>{
    console.log("I am live again");

});



