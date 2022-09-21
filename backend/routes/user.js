
const express=require('express')
const { getUser, addUser, deleteUser, updateUser, getOneUser } = require('../controller/UserController')
const router=express.Router()



router.get('/user',getUser)
router.get('/user/:id',getOneUser)
router.post('/addUser',addUser)

router.delete('/user/:id',deleteUser)
router.patch('/user/:id',updateUser)

module.exports=router