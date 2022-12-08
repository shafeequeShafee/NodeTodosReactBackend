
const mongoose = require("mongoose")

const todosSchema = new mongoose.Schema({
    User:{
        type:String
    },
    Todos: {
        type: Array

    }
    
})

const Todos = mongoose.model('Todos', todosSchema)
module.exports = { Todos }
