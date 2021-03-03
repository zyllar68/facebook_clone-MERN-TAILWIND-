const router = require('express').Router();
const bcrypt = require('bcrypt');

const users = []

router.post('/', async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashPassword)
    const user = {name: req.body.name, password: hashPassword}
    users.push(user)
    res.status(201).send('saved')
  } catch (error) {
    res.status(501).send('error')
  }

});

router.post('/login', async (req, res) => {
  const user = users.find(user => user.name = req.body.name);

  if(user == null){
    return res.status(400).send('cannot fint user!')
  }

  try {
    if(await bcrypt.compare(req.body.password, user.password)){
      res.send('success!')
    } else {
      res.send('not allowed!')
    }
  } catch (error) {
    res.status(501).send('error')
  }
});

module.exports = router;
