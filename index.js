const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
/**
 * Zod for the input validation
 * body {
 * title : string,
 * description: string
 * }
 */
app.post("/todo", async function(req,res){
    const createdPayload = req.body;
    const parsedPayload = createTodo.safeParse(createdPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return;
    }
    // create todo in mongoDb
    await todo.create({
        title:createdPayload.title,
        description:createdPayload.description,
        completd:false
    })
    res.json({
        msg:"ToDo is Created"
    })
})
app.get("todos", async function(req,res){
     const response = await todo.find({})
     res.json({
        response
     })
})
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"you messed up with the inputs"
        })
        return;
    }
     await todo.update({
        _id:req.body.id
     },{
        completd:true
     })
     res.json({
        msg:"Todo is completed!!"
     })
})

app.listen({
   msg:"Server is running"
},3000);