const { Router } = require('express')
const router = Router();
const { getUser, postUser, getUserById, DeleteById} = require('../controllers/index.controlles') 


router.get('/users',getUser)
router.post('/users',postUser)
router.get('/users/:id',getUserById);
router.delete('/delete/:id', DeleteById);

module.exports = router;