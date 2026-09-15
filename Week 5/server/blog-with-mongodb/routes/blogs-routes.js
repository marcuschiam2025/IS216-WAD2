const express = require('express');

const blogsController = require('../controllers/blogs-controller');

const router = express.Router(); // sub application

// CRUD routes for blogs
router.get("/", blogsController.getPosts);

router.get("/:id", blogsController.findPost);

router.post("/", blogsController.addPost);

router.put("/:id", blogsController.editPost);

router.delete("/:id", blogsController.deletePost);

// EXPORT
module.exports = router;