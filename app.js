const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path"); 
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public")); //for loading the css and images


app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
    // app.use(express.static(__dirname + "/signup.css"));
})

app.post("/",function(req,res){
    const name = req.body.Name;
    const mail = req.body.email;

    console.log(name);
    // res.write(mail);
    // res.send();
})



app.listen("3001",function(){
    console.log("Its on");
})