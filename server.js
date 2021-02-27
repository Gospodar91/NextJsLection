const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const bodyParser = require("body-parser");
const handle = app.getRequestHandler();

const PostController = require("./apiForExpress/controllers/postController");

app.prepare().then(async () => {
  const server = express();
  server.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: false,
    }),
  );
  server.use(bodyParser.json({ limit: "500mb" }));
  server.use(express.json()); // for parsing application/json
  server.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded;

  server.get("/api/get_all_posts", PostController.getAllPosts);
  server.post("/api/get_post", PostController.getPost);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  await server.listen(4000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:4000");
  });
});
