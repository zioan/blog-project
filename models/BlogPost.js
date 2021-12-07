const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

//mongoose will create the model for the BlogPosts collection
const BlogPost = mongoose.model("BlogPost, BlogPostSchema");

module.export = BlogPost;
