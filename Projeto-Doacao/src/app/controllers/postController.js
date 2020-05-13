const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')
const Posts = require ('../models/posts')
const PostService = require('../services/postService')
router.use(authMiddleware);


    module.exports = (paramters)=> {
      router.post('/',(req, res) =>{
        console.log(req.body)
        try{
            const post =  PostService.create({ ...req.body, user: req.userId });
            console.log(post)
            return res.send({ post })
        } catch (err){
          return res.status(400).send({error: "Internal Error"})
        }
      
      });
      
      router.get('/list',async(req, res) =>{
        try{
          const post = await Posts.find({user: req.userId}).populate('user');
          post.map((x)=>{
            x.user.posts = undefined
            x.user.friends = undefined
          })
          return res.send({ post})
        } catch (err){
          return res.status(400).send({error: "Internal Error"})
        }
      
      });
      
      router.put('/update',async(req, res) =>{
        try{
          const post = await Posts.findByIdAndUpdate(req.query.postId, {description: req.body.description },{ new : true});
          return res.send({ post })
      } catch (err){
        return res.status(400).send({error: "Internal Error"})
      }
      });
      
      router.delete('/',async(req, res) =>{
        try{
          console.log(req.query.postId)
         await Posts.findByIdAndDelete(req.query.postId);
          res.send()
        } catch (err){
          return res.status(400).send({error: "Internal Error"})
        }
      
      });
      
      
      return paramters.app.use('/posts', router)
    }