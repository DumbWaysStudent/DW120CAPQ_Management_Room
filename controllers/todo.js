const connection = require('./db');

const todos = [{
    id: 1,
    title: "Sleeping",
    isDone: false
},
{
    id: 2,
    title: "Sleeping",
    isDone: false
}
]

//const show = (req, res) => {
// connection.query(`insert into todos ${data.title},${data.isDone}`, (err, resp) => {
//     resp.send(resp);
// });

// const data = req.body;
// connection.query('select * from todos', (err, rows) => {
//     if (err) {
//         throw err;
//     }
//     res.send({
//         id:todos.innsertId,
//         ..data
//     });
// });

// connection.query(`delete from todos where title =   ${data.title}`, (err, resp) => {
//     resp.send(resp);
// });

//res.send(todos)
//}

// const update = (req, res) => {
//     const data = req.body;

//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === data.id) {
//             todos[i].title = data.title;
//             res.send(todos);
//         }
//     }

// }

const remove = (req, res) => {
    const id = req.params.id;
    connection.query(`delete from todos where id = ${id}`, (err, resp) => {
        if (err) {
            throw err;
        }
        resp.send(resp);
    });
    res.send('ook');
}

module.exports = {
    remove
}