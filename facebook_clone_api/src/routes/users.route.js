const router = require('express').Router();
const Account = require('../controllers/account.controller');


router.post('/', Account.create);

router.post('/login', Account.read);

// router.post('/', User.create);

// router.put('/:id', User.update);

// router.delete('/:id', User.delete);

module.exports = router;
