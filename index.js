const express = require('express');
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

})
app.get("todos",function(req,res){

})
app.put("/completed",function(req,res){

})

app.listen({
   msg:"Server is running"
},3000);