const PostRepository = require("../repositories/postRepository");
const SocketIoServer = require("../../index");
const SocketIoSubscriber = require("../subscribers/socketIoSubscriber")(
  SocketIoServer
);
module.exports = {
  create: async (data) => {
    const postData = await PostRepository.create(data);
    if (postData) {
      SocketIoSubscriber.emit("teste");
    }
    return postData;
  },
  getPostsFromUser: async (data) => {
    const postData = await PostRepository.getPostsFromUser(data);
    return postData;
  },
};
