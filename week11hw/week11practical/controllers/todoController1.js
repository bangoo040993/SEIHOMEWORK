const Todo = require('../models/todo1');

exports.newTodoPage = async (req,res) =>{
    try {

       await res.render('../views/todos/New')
    } catch (error) {
        res.json({message: message.error}) 
    }
}

exports.createToDo = async (req, res) => {
 
    
    try{
        const createdTodo =  await Todo.create(req.body)
        
        res.send(createdTodo)
    }catch(error){
        res.status(400).send({ message: error.message })
    }
}


exports.getAllTodos = async (req, res) => {
    try {
      const foundtodos = await Todo.find({});
      res.render('todos/Index', {
        todos: foundtodos
    })
      
} catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
 
 exports.getOneTodo = async (req, res) => {
    try {
        const oneTodo = await Todo.findOne({_id: req.params.id})
        res.send(oneTodo);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.updateTodo = async (req, res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    try {
        const updates = Object.keys(req.body);
        const todo = await Todo.findOne({ _id: req.params.id });
        updates.forEach(update => todo[update] = req.body[update]);
        await todo.save();
      
        res.send(todo);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };


exports.deleteTodo = async (req, res) => {
    try {
      const todo = await Todo.findOne({ _id: req.params.id })
      todo.deleteOne()
  
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
