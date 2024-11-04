const mongoose = require("mongoose");
const { boolean } = require("zod");
/**
 * need to develop a data base schema 
 * Todos {
 *      title:String,
 *      description:String,
 *       completed:boolean
 * }
 */
mongoose.connect("mongodb+srv://22211a1205:Manoj1205@cluster0.q6loi.mongodb.net/todo_application");
const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completd:Boolean
})
const todo = mongoose.model('todo',todoSchema);
module.exports = {
    todo
}