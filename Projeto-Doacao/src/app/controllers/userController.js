const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const UserService = require('../services/userService');
router.use(authMiddleware);

module.exports = (paramters) =>{ 
    router.put('/', async(req, res)=>{
        console.log(req)
        try{
            const userData = await UserService.update({userId: req.userId, ...req.body});
            return res.send(userData)
        } catch (err){
            console.log('ocorreu um erro \n e foi esse: \n',err)
          return res.status(400).send({error: "Internal Error"})
        }
    });
    router.get('/list',authMiddleware, async(req, res)=>{
        try{
            const userData = await UserService.findAll();
            return res.send(userData)
        } catch (err){
            console.log('ocorreu um erro \n e foi esse: \n',err)
          return res.status(400).send({error: "Internal Error"})
        }
    });
    return paramters.app.use('/users', router)
}