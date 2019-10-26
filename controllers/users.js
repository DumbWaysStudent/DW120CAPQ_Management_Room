const users = require('../models').users;
const room = require('../models').room;
const customer = require('../models').customer;
const jwt = require('jsonwebtoken');

exports.getRoom = (req, res) => {
    room.findAll().then(data => res.send(data))
}
exports.getCustomer = (req, res) => {
    customer.findAll().then(data => res.send(data))
}



exports.insertRoom = (req, res) => {
    room.create(req.body).then(result => {
        res.send(result)
    })
}

exports.UpdateRoom = (req, res) => {
    room.update(
        req.body,
        { where: req.params }
    ).then(webtoon => {
        res.send({
            message: "success",
            ...req.body
        })
    })
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