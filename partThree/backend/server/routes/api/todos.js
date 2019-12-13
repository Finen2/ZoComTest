const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Todos
router.get('/', async(req, res) => {
  const todos = await loadTodoCollection();
  res.send(await todos.find({}).toArray())
});

// Add Todos
router.post('/', async (req, res) => {
  const todos = await loadTodoCollection();
  await todos.insertOne({
    todoItem : req.body.todoItem, //This needs to be fixed
    checkedStatus : 'unchecked',
    createdAt: new Date()
  });
  res.status(201).send();
});

// Update Todos
router.post('/:id', async (req, res) => {
  const todos = await loadTodoCollection();
  await todos.update({_id: new mongodb.ObjectID(req.params.id)},{$set:{checkedStatus : req.body.checkedStatus}});
  res.status(201).send();
});

// Delete Todos
  router.delete('/:id', async (req, res) => {
    const todos = await loadTodoCollection();
    await todos.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
  });

// Delete All Todos
  router.delete('/', async (req, res) => {
    const todos = await loadTodoCollection();
    await todos.drop();
    res.status(200).send();
  });

loadTodoCollection = async() => {
    const client = await mongodb.MongoClient.connect('mongodb+srv://tim-aro:kaka1234@zocompartthree-q0ktq.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    return client.db('todo-app').collection('todos');
}

module.exports = router;
