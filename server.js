/*body parser*/
const bodyParser = require("body-parser");
/*jwt*/
const jwt = require('jsonwebtoken');
/*axios*/
const axios = require('axios');
/*group routes*/
require('express-group-routes');
/*express*/
const express = require("express");
const port = 5000;
const app = express();
/*model*/
const users = require("./controllers/users");


//middlewares
const { authenticated } = require('./middleware');

app.use(bodyParser.json());
/*========================================================================*/

app.group("/api/v2", (router) => {

    router.post('/rooms', users.insertRoom);
    router.get('/rooms', users.getRoom);
    router.put('/rooms/:id/', users.UpdateRoom);

    router.get('/customers', users.getCustomer);
    router.post('/login', users.signin);
    router.post('/register', users.register);



})

/*========================================================================*/

/*listing port*/
app.listen(port, () => console.log('connected'));  