const UserRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    } )
}
module.exports = {
    update : async (data)=>{
        const userData = await UserRepository.update(data)
        return generateToken({id: userData.id, image: userData.profileImage, name:userData.name}) ;
    },
    findAll : async ()=>{
        const userData = await UserRepository.findAll()
        return userData;
    }
}