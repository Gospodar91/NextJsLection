const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
exports.get_post = function (data, res) {
  connection.execute(`SELECT * FROM next_table WHERE id=${data.id}`, function (err, results) {
    if (err) {
      console.log(err);
      res(err, null);
    }
    if (results[0]) {
      res(null, { post: results[0], status: "succsess" });
    } else {
      res(null, { user: null, status: "not found" });
    }
  });
};
exports.get_all_posts = function (data, res) {
  connection.execute(`SELECT id,title FROM next_table`, function (err, results) {
    if (err) {
      console.log(err);
      res(err, null);
    }
    if (results[0]) {
      res(null, { posts: results, status: "succsess" });
    } else {
      res(null, { user: null, status: "not found" });
    }
  });
};
