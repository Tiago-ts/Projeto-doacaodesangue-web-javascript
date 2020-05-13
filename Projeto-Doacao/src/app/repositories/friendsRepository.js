const FriendsModel = require("../models/friends");

module.exports = {
  create: (data) => {
    return FriendsModel.create(data)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  findAll: (data) => {
    return FriendsModel.find(data)
      .populate(["user", "friend"])
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
