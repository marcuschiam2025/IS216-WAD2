const express = require("express");
const postsRoutes = require("./routes/posts.routes");

const server = express();
server.use(express.json());

// Adds headers: Access-Control-Allow-Origin: *
var cors = require('cors');
server.use(cors());

server.use("/posts", postsRoutes);

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const HOST = "localhost";
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`API running on http://${HOST}:${PORT}`));