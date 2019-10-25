const users = require('../models').users;
const jwt = require('jsonwebtoken');

exports.index = (req, res) => {
    users.findAll().then(todos => res.send(todos))
}

exports.register = (req, res) => {
    users.create(req.body).then(result => {
        var generateToken = jwt.sign({ name: req.body.name }, 'my-secret-key');
        res.send({
            "username": result.username,
            "id": result.id.toString(),
            "token": generateToken,
            "status": 'ok'
        })
    })
}

exports.signin = (req, res) => {
    const password = req.body.password;
    users.findOne({ where: { username: req.body.username } }).then(function (result) {
        if (result) {
            if (result.password == req.body.password) {
                var generateToken = jwt.sign({ name: req.body.username }, 'my-secret-key');
                res.send({
                    "username": result.username,
                    "id": result.id.toString(),
                    "token": generateToken,
                    "status": 'ok'
                });
            } else {
                res.send({
                    "failed": "Password incorrect",
                    "status": 'false'
                })
            }
        } else {
            res.send({
                "failed": "There is no user registered with that email address",
                "status": 'false'
            })
        }
    })
} 