const UserModel = require('../models/users');

module.exports = {
    update : (data)=>{
       return  UserModel.findByIdAndUpdate(data.userId , {profileImage: data.newProfileImage, deletehash: data.deletehash})
        .then(response =>{
            return response;
        }).catch(err =>{
            console.log(err)
        })
    },
    findAll : ()=>{
        return  UserModel.find()
         .then(response =>{
             
             const newResponse = response.map((x)=>{
                 x.messages = undefined;
                 x.posts = undefined;
                 x.friends = undefined;
             })
             return response;
         }).catch(err =>{
             console.log(err)
         })
     }
}