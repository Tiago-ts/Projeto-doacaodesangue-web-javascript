const PostModel = require("../models/posts");

module.exports = {
  create: (data) => {
    return PostModel.create(data)
      .then((response) => {
        console.log(response);
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostsFromUser: (data) => {
    return PostModel.find(data)
      .populate("user")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
