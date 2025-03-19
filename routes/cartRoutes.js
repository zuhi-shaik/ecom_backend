const express =require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { addTocart, getCart, removeFromCart } = require('../controllers/cartController')

const cartrouter=express.Router()

cartrouter.post("/add",authMiddleware,addTocart)
cartrouter.get("/",authMiddleware,getCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)

module.exports=cartrouter