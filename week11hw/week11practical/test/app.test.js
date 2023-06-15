const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8080, () => console.log('Testing on PORT 8080'))
const Todo = require('../models/todo1')
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})
afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop() // getting rid of our MongoDB instance itself
    server.close() 
})

describe('Test the Todo Endpoints', ()=>{

    test('It should create a new user', async ()=>{
        const response = await request(app) // supertest
        .post('/todos')
        .send({title: 'hw', description: 'week11, week12' })
        expect(response.body.description).toEqual('week11, week12')
        expect(response.body.title).toBe('hw')
        expect(response.body).toHaveProperty('completed')
    })
})

test('It should return a list of todos', async ()=>{
    const response = await request(app)
    .get('/todos')
    console.log(response.body);
    
    
    expect(Array.isArray(response.body.todo)).toBe(false)
    expect(response.statusCode).toBe(200)

  })

  test('It should return one todo', async () => {
    // Create a new Todo object and save it in the database
    const todo = new Todo({
      title: 'hw1',
      description: 'week11, week12'
    });
    await todo.save();
  
    // Make a GET request to the getOneTodo route with the ID of the created todo
    const response = await request(app)
      .get(`/todos/${todo._id}`); 
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toEqual('hw1');
  });

  test('It should update a todo', async () => {
    // Create a new Todo object and save it in the database
    const todo = new Todo({
      title: 'Original Title',
      description: 'Original Description'
    });
    await todo.save();
    console.log(todo)
  
    // Make a PUT request to the updateTodo route with the ID of the created todo
    const updatedTodoData = {
      title: 'Updated Title',
      description: 'Updated Description'
    };
    console.log(updatedTodoData)
    const response = await request(app)
      .put(`/todos/${todo._id}`)
      .send(updatedTodoData);
  
    // Verify the response
    expect(response.statusCode).toBe(200);
    expect(response.body.description).toEqual('Updated Description');
  
    
    const updatedTodo = await Todo.findById(todo._id);

    expect(updatedTodo.title).toBe(updatedTodoData.title);
    expect(updatedTodo.description).toBe(updatedTodoData.description);
  });


//////////////////////////////////

test('It should delete a todo', async () => {
    // Create a new Todo object and save it in the database
    const todo = new Todo({
      title: 'Todo to be deleted',
      description: 'Description of todo to be deleted'
    });
    await todo.save();
  
    // Make a DELETE request to the deleteTodo route with the ID of the created todo
    const response = await request(app).delete(`/todos/${todo._id}`);
  
    // Verify the response
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Todo deleted successfully' });
  
    // Try to fetch the deleted todo from the database
    const deletedTodo = await Todo.findById(todo._id);
  
    // Verify that the todo has been deleted
    expect(deletedTodo).toBeNull();
  });