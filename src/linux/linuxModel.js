const connection = require('../../db_connection');

class Linux {
    static getAll = (req, res) => {
        if (req.query.id){
            connection.query('SELECT * FROM distribution WHERE id = ?',[req.query.id],(err, results) => {
                res.json(results)
            })
        } else {
        connection.query('SELECT * FROM distribution', (err, results) => {
            res.json(results)
        })}
    }

    static updateOne = (req, res) => {
        connection.query("UPDATE distribution SET name = ?, ver = ?, launch_year = ?, official_website = ? WHERE id = 1",
        ['Linux Mint', '21.2 Victoria', 2023, 'https://www.linuxmint.com'], (err, results) => {
            res.json(results)
        })
    }

    static addOne = (req, res) => {
        connection.query("INSERT INTO distribution (name, ver, launch_year, official_website) VALUES ('Ubuntu', '4.10', 2004, 'https://www.ubuntu.com')",
        (err, results) => {
            res.json(results)
        })
    }

    static deleteOne = (req, res) => {
        connection.query('DELETE FROM distribution WHERE id = 16', (err, results) => {
            res.json(results)
        })
    }
}

module.exports = Linux;