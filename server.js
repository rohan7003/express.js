const express = require("express");
const app = express();


//application will use now only json data format
app.use(express.json());

const port = 8081;

const toDoList = ["hey everyone", "hope u all", "are doing", "awesome at ur work"];

//http://localhost:8081/todos
app.get("/todos",(req,res)=>{
    //callback
    res.status(200).send(toDoList)
})

app.listen(port,()=>{
    console.log(`NodeJs with Experss started running succesfully on port ${port}`)
})
