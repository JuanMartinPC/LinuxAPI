const Router = require('express');
const router = Router();
const Users = require('./usersModel');


router.get('/', Users.getAll)
router.post('/login', Users.login)
router.post('/add', Users.addOne)
router.get('/update', Users.update)
router.get('/delete', Users.delete)

module.exports = router;