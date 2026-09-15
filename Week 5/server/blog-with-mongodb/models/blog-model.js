// Create a new ‘blog' schema
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: Number
    },

    subject: {
      type: String,
      maxlength: 100,
      trim: true,
      default: null,
    },

    entry: {
      type: String,
      default: null,
    },

    mood: {
      type: String,
      enum: ["Happy", "Sad", "Angry", "Excited", "Bored"],
      default: null,
    },

    createTimestamp: {
      type: Date,
      default: Date.now,
      immutable: true,
    },

    updateTimestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Keep updateTimestamp in sync when saving
blogSchema.pre("save", function (next) {
  this.updateTimestamp = new Date();
  next();
});

// Also update updateTimestamp on findOneAndUpdate / updateOne style updates
blogSchema.pre(["findOneAndUpdate", "updateOne", "updateMany"], function (next) {
  this.set({ updateTimestamp: new Date() });
  next();
});

// module.exports = mongoose.model("Blog", blogSchema);
const Blog = mongoose.model('Blog', blogSchema,'blogs');

// CRUD Methods here
exports.retrieveAll = function() {
  // console.log(`In retrievAll`)
  return Blog.find();
};

exports.findBySubject = function(subject) {
  return Blog.findOne({ subject: subject });
};

exports.findById = function(id) {
  return Blog.findOne({ id: id });
};

exports.addBlog = function(id, subject, entry, mood) {
  // console.log(`In addBlog`)

  const newBlog = {
    id: id, 
    subject: subject,
    entry: entry,
    mood: mood
  }

  return Blog.create(newBlog);
};

exports.editBlog = function(id, subject,entry,mood) {
  console.log(`In editBlog`)
  return Blog.updateOne({id:id} ,{subject:subject, entry:entry, mood:mood});
};

exports.deleteBlog = function(id) {
  // console.log(`In deleteBlog`)
  return Blog.deleteOne({ id: id });
};

