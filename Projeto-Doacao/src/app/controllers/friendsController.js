const express = require("express");
const router = express.Router();
const FriendsService = require("../services/friendsService");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);
module.exports = (paramters) => {
  router.post("/", async (req, res) => {
    console.log(req);
    try {
      const friendsData = await FriendsService.create({
        user: req.userId,
        ...req.body,
      });
      return res.send({ friendsData });
    } catch (err) {
      console.log("ocorreu um erro \n e foi esse: \n", err);
      return res.status(400).send({ error: "Internal Error" });
    }
  });
  router.get("/", async (req, res) => {
    try {
      const friendsData = await FriendsService.findAll({ user: req.userId });
      return res.send({
        friendsData: friendsData.friendsdata,
        posts: friendsData.posts,
      });
    } catch (err) {
      console.log("ocorreu um erro \n e foi esse: \n", err);
      return res.status(400).send({ error: "Internal Error" });
    }
  });
  return paramters.app.use("/friends", router);
};
