const express = require('express');
const Users = require('../models/users');
const router = express.Router();
const cors = require('cors')
router.use(cors())
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

process.env.SECRET_KEY = 'secret'
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    } )
}



// module.exports = app => app.use('/auth', router)
module.exports = (paramters) =>{
    router.post('/register',cors(), async(req, res) =>{
        const { email } = req.body;
        try {
            if(await Users.findOne({ email })){
                return res.status(400).send({ error: 'User already exists'});
            }
            const user = await Users.create(req.body);
            user.password = undefined
            res.send({ user, token:generateToken({id: user.id}) });
        }catch(err){
            console.log(err)
            res.status(400).send({ error : "Registration failed!"})
        }
        });
        
        router.post('/authenticate',async(req, res) =>{
          setTimeout(() => {
            paramters.io.emit('teste',{obj: 'teste'})
          }, 5000);
            const { email, password } = req.body;
            const user = await Users.findOne({ email }).select('+password');
            if(!user)
                return   res.status(400).send({ error : "User not found"})
            
            if(!await bcrypt.compare(password, user.password))
            return   res.status(400).send({ error : "Invalid passowrd"})
            user.password = undefined
            res.send({ user, token:generateToken({id: user.id, image: user.profileImage, name:user.name}) });
            });
        
        router.post('/forgotpassword',async(req, res) =>{
                const { email } = req.body;
              try{
                const user = await Users.findOne({ email }).select('+password');
                if(!user)
                    return   res.status(400).send({ error : "User not found"});
                const token = crypto.randomBytes(20).toString('hex');
                const now = new Date();
                now.setHours(now.getHours() + 1);
        
                await Users.findByIdAndUpdate(user.id, {
                 '$set' : {
                    passwordResetToken: token,
                    passwordResetExpires: now,
                 }   
                })
                mailer.sendMail({
                    to: email,
                    from: 'teste@gmail.com',
                    template: 'forgotpassword',
                    context: { token },
        
                }).then(response =>{
                    res.send()
                    console.log(response)
                }).catch((err)=>{
                    console.log(err)
                    if(err)
                    return res.status(400).send({error: 'Cannot send forgot password'})
                })
        
              }catch(err){
            console.log(err)
            res.status(400).send({ error : "internal Error!"})
        }
                });
        router.post('/resetpassword',async(req, res) =>{
        
        const { email, token , password } = req.body;
        try{
            const user = await Users.findOne({ email }).select('+passwordResetToken passwordResetExpires');
        
            if(!user)
            res.status(400).send({erro : 'User not found'})
            if(token !== user.passwordResetToken)
            res.status(400).send({erro : 'Token invalid'})
            const now = new Date();
        
            if(now > user.passwordResetExpires)
            res.status(400).send({erro : 'Token expried, generate a new token'})
        
            user.password = password
            await user.save();
            res.send();
        
        }catch(err){
            res.status(400).send({erro : 'Internal error from reset password'})
        }
        
        });
    return paramters.app.use('/auth', router)
} 