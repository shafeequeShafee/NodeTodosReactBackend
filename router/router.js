const express = require('express')
const todosRouter =express.Router()
const {saveTodos,getTodos,fullSearch} = require("../controller/controller")


todosRouter.post('/saveTodos',saveTodos)
// todosRouter.get('/getTodos/:User/:Password',getTodos)
todosRouter.get('/getTodos',getTodos)
todosRouter.post('/fullSearch',fullSearch)

// query///
// todosRouter.get('/getTodos',getTodos)

//params///
// todosRouter.get('/getTodos/:User/:Job',getTodos)

//http://localhost:4000/todos/getTodos/sfq&programmer
// todosRouter.get('/getTodos/:User&:Job',getTodos)

module.exports= todosRouter