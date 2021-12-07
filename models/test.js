const mongoose = require("mongoose");

const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

BlogPost.create({
  title: "Blog title",
  body: "Text body test Text body test Text body test Text body test ",
});
