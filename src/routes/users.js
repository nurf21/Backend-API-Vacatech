const router = require('express').Router()
const { 
  getAllWorker, 
  getAllUsers,
  getAllUserByName, 
  getUserById,
  loginUser, 
  regWorker, 
  regRecruiter, 
  forgotPassword, 
  changePassword, 
  activationEmail, 
  activationUser 
} = require('../controller/users')

router.get("/", getAllUsers)
router.get('/worker', getAllWorker)
router.get('/:id', getUserById)
router.get("/search", getAllUserByName)
router.post('/login', loginUser)
router.post('/register/worker', regWorker)
router.post('/register/recruiter', regRecruiter)
router.post('/register/email', activationEmail)
router.post('/forgot', forgotPassword)
router.patch('/change', changePassword)
router.patch('/activate', activationUser)

module.exports = router
