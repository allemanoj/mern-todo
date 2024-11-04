const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());
/**
 * Zod for the input validation
 * body {
 * title : string,
 * description: string
 * }
 */
app.post("/todo",function(req,res){
    const createdPayload = req.body;
    const parsedPayload = createTodo.safeParse(createdPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return;
    }
    // create todo in mongoDb
})
app.get("todos",function(req,res){

})
app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"you messed up with the inputs"
        })
        return;
    }
})

app.listen({
   msg:"Server is running"
},3000);