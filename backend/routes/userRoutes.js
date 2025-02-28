import express from 'express'
import { allUser, login, logout, signup, userDetail } from '../controlller/userControl.js'
import { authToken } from '../middleware/authToken.js'
const router=express.Router()
router.post("/signup",signup)
router.post("/login",login)
router.get("/details",authToken,userDetail)
router.get("/logout",logout)
router.get("/allUser",authToken,allUser)
export default router