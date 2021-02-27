import axios from "axios";

export function getAllPosts() {
  const config = {
    headers: {
      "Content-Type": `application/json`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.get(`${process.env.SERVER_URL}/api/get_all_posts`, config).then((data) => data.data);
}

export function getPost(id) {
  const reqBody = {
    id,
  };
  const config = {
    headers: {
      "Content-Type": `application/json`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios
    .post(`${process.env.SERVER_URL}/api/get_post`, reqBody, config)
    .then((data) => data.data);
}
