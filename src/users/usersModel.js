const connection = require('../../db_connection');

class Users {
    static getAll = (req, res) => {
        const id = req.query.id;
        if (id){
            connection.query('SELECT * FROM users WHERE id = ?',[id],(err, results) => {                
                res.json(results)
            })
        } else {
        connection.query('SELECT * FROM users', (err, results) => {
            res.json(results)
        })}
    }

    static addOne = (req, res) => {
        const {username, email, pass} = req.body;
        connection.query('INSERT INTO users (username, email, pass) VALUES (?, ?, ?)', [username, email, pass], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Usuario agregado.'})
        })
    }

    static update = (req, res) => {
        const id = req.query.id;
        const {username, email, pass} = req.body;
        connection.query('UPDATE users SET username = ?, email = ?, pass = ? WHERE id = ?', [username, email, pass, id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Usuario actualizado.'})
        })
    }

    static delete = (req, res) => {
        const id = req.query.id;
        connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Usuario eliminado.'})
        })
    }
}

module.exports = Users;