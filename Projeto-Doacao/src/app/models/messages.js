const mongoose = require('../../database/index');
const MessagesSchema = new mongoose.Schema({
receivedTo:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
},
sentBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
},
message : {
    type: Text,
   require: true
},
createdAt :{
    type: Date,
    default: Date.now,
}
});

const Messages = mongoose.model('Messages', MessagesSchema);
module.exports = Messages;