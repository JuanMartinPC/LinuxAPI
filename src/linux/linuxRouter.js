const Router = require('express');
const router = Router();
const Linux = require('./linuxModel');

router.get('/', Linux.getAll)
router.get('/update', Linux.updateOne)
router.get('/add', Linux.addOne)
router.get('/delete', Linux.deleteOne)


module.exports = router;