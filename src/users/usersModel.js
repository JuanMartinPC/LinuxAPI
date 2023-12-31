const connection = require('../../db_connection');
const { hash, compare } = require('bcrypt');
const { tokenSign } = require('../utils/handleJWT');

class Users {    
    static addOne = async(req, res) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173/login")
        const {username, email, pass} = req.body;
        const safePass = await hash(pass, 10);
        await connection.promise().query('INSERT INTO users (username, email, pass) VALUES (?, ?, ?)', [username, email, safePass], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.send({username, email, pass})
    })
    }

    static login = async(req, res) => {
        const {email, pass} = req.body;
        connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return res.json({'mensaje': err})
            console.log(results.length);
            if (results.length < 1) return res.status(404).json({'mensaje': 'Email o contraseña incorrectas.'})
            compare(pass, results[0].pass, (err, results) => {
                if (!results) return res.status(401).json({'mensaje': 'Email o contraseña incorrectas.'})
                else {
                    console.log(results);

                    //JWT
                    const tokenPayload = {
                        email: email,
                        pass: pass
                    }                
                    const jwt = tokenSign(tokenPayload, 60 * 60 * 24)
                    return (res.status(200).json({'mensaje': 'Usuario autorizado.', 'token': jwt}))
                }
            })            
        })
    }

    // Metodos para admins
    static getAll = (req, res) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173")
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