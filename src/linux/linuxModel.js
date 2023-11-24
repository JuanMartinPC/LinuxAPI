const connection = require('../../db_connection');

class Linux {
    static getAll = (req, res) => {
        res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
        const id = req.query.id;
        if (id){
            connection.query('SELECT * FROM distributions WHERE id = ?',[id],(err, results) => {
                res.json(results)
            })
        } else {
        connection.query('SELECT * FROM distributions', (err, results) => {
            res.json(results)
        })}
    }

    static updateOne = (req, res) => {
        const id = req.query.id;
        const {name, ver, launch_year, website, info, image} = req.body;
        connection.query("UPDATE distributions SET name = ?, ver = ?, launch_year = ?, website = ?, info = ?, image = ? WHERE id = ?",
        [name, ver, launch_year, website, info, image, id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución actualizada.'})
        })
    }

    static addOne = (req, res) => {
        const {name, ver, launch_year, website, info, image} = req.body;
        connection.query("INSERT INTO distributions (name, ver, launch_year, website, info, image) VALUES (?, ?, ?, ?, ?, ?)", [name, ver, launch_year, website, info, image],
        (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución agregada.'})
        })
    }

    static deleteOne = (req, res) => {
        const id = req.query.id;
        connection.query('DELETE FROM distributions WHERE id = ?',[id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución eliminada.'})
        })
    }
}

module.exports = Linux;