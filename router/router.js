const express = require('express')
const todosRouter =express.Router()
const {saveTodos,getTodos} = require("../controller/controller")


todosRouter.post('/saveTodos',saveTodos)
todosRouter.get('/getTodos/:id',getTodos)
module.exports= todosRouter