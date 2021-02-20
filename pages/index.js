import { useState, useEffect } from "react";
import { getPost, getAllPosts } from "../apiForExpress/requests";
import Link from "next/link";
export default function MainPage() {
  const [posstState, setPostsState] = useState(null);
  useEffect(() => {
    getPostsOnReact(1);
    getAllPostsOnReact();
  }, []);

  async function getPostsOnReact(id) {
    try {
      const response = await getPost(id);
    } catch (error) {
      console.log("error", error);
    }
  }
  async function getAllPostsOnReact() {
    try {
      const response = await getAllPosts();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h1>I am Index page</h1>
      <Link href={"/posts"}>
        <a> Go to posts</a>
      </Link>
    </div>
  );
}
