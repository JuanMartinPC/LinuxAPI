const Router = require('express');
const router = Router();
const Users = require('./usersModel');


router.get('/', Users.getAll)
router.get('/login', Users.login)
router.get('/add', Users.addOne)
router.get('/update', Users.update)
router.get('/delete', Users.delete)

module.exports = router;