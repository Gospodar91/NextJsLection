const DB = require("../models/postModel");

exports.getPost = function (req, res) {
  DB.get_post(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
exports.getAllPosts = function (req, res) {
  DB.get_all_posts(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
