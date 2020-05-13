const mongoose = require("../../database/index");
const FriendsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Friends = mongoose.model("Friends", FriendsSchema);
module.exports = Friends;
