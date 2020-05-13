const FriendsRepository = require("../repositories/friendsRepository");
const PostsRepository = require("../repositories/postRepository");
module.exports = {
  create: async (data) => {
    const friendsdata = await FriendsRepository.create(data);
    return friendsdata;
  },
  findAll: async (data) => {
    let friendsdata = await FriendsRepository.findAll(data);
    let posts = [];
    if (friendsdata) {
      posts.push(
        ...(await PostsRepository.getPostsFromUser({
          user: friendsdata[0].user._id,
        }))
      );
      await Promise.all(
        friendsdata.map(async (friends) => {
          posts.push(
            ...(await PostsRepository.getPostsFromUser({
              user: friends.friend._id,
            }))
          );
        })
      );
      return { friendsdata, posts };
    }
  },
};
