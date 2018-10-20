const Todo = require('../models/todo')

async function findAll (ctx) {
  // Fetch all Todo’s
  const todos = await Todo.find({})
  ctx.body = todos
}
 
async function create (ctx) {
  // Create New Todo
  const newTodo = new Todo(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}
 
async function destroy (ctx) {
  // Find Todo in database
  const id = ctx.params.id
  const todo = await Todo.findById(id)

  // Delete todo
  const deletedTodo = await todo.remove()
  ctx.body = deletedTodo
}
 
async function update (ctx) {
  // Find Todo based on id and on/off
  const id = ctx.params.id
  const todo = await Todo.findById(id)
  todo.done = !todo.done

   // Update todo
  const updatedTodo = await todo.save()
  ctx.body = updatedTodo
}
 
module.exports = {
  findAll,
  create,
  destroy,
  update
}
