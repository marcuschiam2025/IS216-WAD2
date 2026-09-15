const express = require("express");
const controller = require("../controllers/posts.controller");

const router = express.Router();

router.get("/", controller.listPosts);
router.get("/:id", controller.getPostById);
router.post("/", controller.createPost);
router.put("/:id", controller.replacePost);
router.patch("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);

module.exports = router;