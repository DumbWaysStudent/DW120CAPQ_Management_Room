const Todo = require('../models').users;

exports.index = (req, res) => {
    Todo.findAll().then(todos => res.send(todos))
}