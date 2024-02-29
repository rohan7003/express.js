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

app.post("/todos",(req,res)=>{
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({
        message: "The task was added succesfully"
    })
})

app.delete("/todos",(req,res)=>{
   var itemToDelete = req.body.item;

   toDoList.find((elem,index)=>{
    if(elem === itemToDelete){
        toDoList.splice(index, 1);
    }
   })
   res.status(204).send({
    message: `Deleted item ${req.body.item}`
   })
})


//put patch
app.all("/todos",(req,res)=>{
    res.status(501).send({
        message: "Not yet implemented"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        message: "page not found"
    })
})
app.listen(port,()=>{
    console.log(`NodeJs with Experss started running succesfully on port ${port}`)
})
