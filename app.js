const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); 
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname)));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
    // app.use(express.static(__dirname + "/signup.css"));
})

app.post("/",function(req,res){
    res.send("404")
})



app.listen("3001",function(){
    console.log("Its on");
})