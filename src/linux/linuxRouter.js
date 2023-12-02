const Router = require('express');
const router = Router();
const Linux = require('./linuxModel');
const isAuth = require('../middlewares/Auth')

router.get('/', Linux.getAll)
router.put('/update', isAuth, Linux.updateOne)
router.post('/add', isAuth, Linux.addOne)
router.delete('/delete', isAuth, Linux.deleteOne)


module.exports = router;