export default function test(req, res) {
  res.statusCode = 201;
  res.setHeader = "Content Type, application/json";
  res.end(JSON.stringify({ message: "Connection is  stable" }));
}
