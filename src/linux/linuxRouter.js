const Router = require('express');
const router = Router();
const Linux = require('./linuxModel');
const isAuth = require('../middlewares/Auth')

router.get('/', Linux.getAll)
router.put('/update', Linux.updateOne)
router.post('/add', Linux.addOne)
router.delete('/delete', Linux.deleteOne)


module.exports = router;