const fs = require("fs/promises");

// Get Service model
const Blog = require("../models/blog-model");

exports.getPosts = async (req, res) => {
  try {
    let blogList = await Blog.retrieveAll(); // fetch all the list
    console.log(blogList);
    res.json(blogList); // Send the list as JSON response
  } catch (error) {
    console.error(error);
    res.send("Error connecting database"); // Send error message if fetching fails
  }
};

exports.findPost = async (req, res) => {
  const id = req.params.id || req.body.id;
  try {
    let result = await Blog.findById(id);
    console.log(result);
    res.json(result); // Send the result as JSON response
  } catch (error) {
    console.error(error);
    res.send("Error connecting database"); // Send error message if fetching fails
  }
};

exports.addPost = async (req, res) => {
  let nextId = 0;
  try {
    let blogList = await Blog.retrieveAll(); // fetch all the list
    // compute a new id
    nextId = blogList.reduce((max, p) => Math.max(max, p.id || 0), 0) + 1;

    const subject = req.body.subject;
    const entry = req.body.entry;
    const mood = req.body.mood;

    await Blog.addBlog(nextId, subject, entry, mood); // create new blog
    res.send("Blog has been successfully added.");
  } catch (error) {
    console.error(error);
    res.send("Error connecting database"); // Send error message if fetching fails
  }
};

exports.deletePost = async (req, res) => {
  const id = req.params.id || req.body.id;

  try {
    let success = await Blog.deleteBlog(id);
    console.log(success); // check out the console.log
    if (success.deletedCount === 1) {
      res.send("Blog has been successfully deleted.");
    }
  } catch (error) {
    console.error(error);
    res.send("Error connecting database"); // Send error message if fetching fails
  }
};

exports.editPost = async (req, res) => {
  const id = req.params.id || req.query.id || req.body.id;
  const subject = req.query.subject || req.body.subject;
  const entry = req.query.entry || req.body.entry;
  const mood = req.query.mood || req.body.mood;
  console.log(subject)
  try {
    let success = await Blog.editBlog(id, subject, entry, mood);
    console.log(success);
    if (success.modifiedCount === 1) {
      res.send("Blog has been successfully updated.");
    }
  } catch (error) {
    console.error(error);
    res.send("Error connecting database"); // Send error message if fetching fails
  }
};
