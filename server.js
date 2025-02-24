const express = require("express");
const app = express();
app.use(express.json());

const users = [];

app.get("/", (req,res)=>{
    res.send("Welcome to Backend CA-2 I'm Dhayanithi from squad 74, I have used post HTTP request to collect the email and password data from the user and stored it in a Array called Users")
})

app.post("/users", (req,res)=>{
    const {email, password} = req.body;
    if(!email){
        return res.status(404).json({message : "Email cannot be empty"});
    }
    if(!password){
        return res.status(404).json({message : "Password cannot be empty"})
    }
    users.push({email, password});
    return res.status(201).json(users);
})

app.get("/users", (req,res)=>{
    if(users.length === -1){
        return res.status(404).json({message : "No users Found"});
    }
    res.status(200).json(users);
})

app.listen(3000, ()=>{
    console.log(`Your server is running in http://localhost:3000`)
})