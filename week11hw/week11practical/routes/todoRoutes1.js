const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController1');

 router.get('/new', todoController.newTodoPage)
 router.get('/', todoController.getAllTodos); //list all 
 router.post('/', todoController.createToDo);
 router.get('/:id', todoController.getOneTodo);
 router.put('/:id', todoController.updateTodo);
 router.delete('/:id', todoController.deleteTodo);


module.exports = router;
