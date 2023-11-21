const connection = require('../../db_connection');

class Linux {
    static getAll = (req, res) => {
        const id = req.query.id;
        if (id){
            connection.query('SELECT * FROM distribution WHERE id = ?',[id],(err, results) => {
                res.json(results)
            })
        } else {
        connection.query('SELECT * FROM distribution', (err, results) => {
            res.json(results)
        })}
    }

    static updateOne = (req, res) => {
        const id = req.query.id;
        const {name, ver, launch_year, official_website} = req.body;
        connection.query("UPDATE distribution SET name = ?, ver = ?, launch_year = ?, official_website = ? WHERE id = ?",
        [name, ver, launch_year, official_website, id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución actualizada.'})
        })
    }

    static addOne = (req, res) => {
        const {name, ver, launch_year, official_website} = req.body;
        connection.query("INSERT INTO distribution (name, ver, launch_year, official_website) VALUES (?, ?, ?, ?)", [name, ver, launch_year, official_website],
        (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución agregada.'})
        })
    }

    static deleteOne = (req, res) => {
        const id = req.query.id;
        connection.query('DELETE FROM distribution WHERE id = ?',[id], (err, results) => {
            if (err) return res.json({'mensaje': err})
            res.json({'mensaje': 'Distribución eliminada.'})
        })
    }
}

module.exports = Linux;