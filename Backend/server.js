const express = require("express");
const app = express();

let allBlogs = [
  { id: 1, title: "First Blog", description: "This is first blog" },
  { id: 2, title: "Second Blog", description: "This is the second blog" },
  { id: 3, title: "Third Blog", description: "This is the third blog" },
];

app.use(express.json());

//get all blogs
app.get("/blogs", (req, res) => {
  res.status(200).json(allBlogs);
});

//get specific blog
app.get("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const requestedBlog = allBlogs.find((blog) => blog.id === blogId);
  console.log(requestedBlog);
  res.status(200).json({ requestedBlog });
});

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
