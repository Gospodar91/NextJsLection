import { useState, useEffect } from "react";
import { getPost } from "../../apiForExpress/requests";
import { useRouter } from "next/router";
export default function singlePost({ data }) {
  const router = useRouter();
  const [postState, setPostState] = useState(data);
  useEffect(() => {
    if (!data) {
      getPostsOnReact(router.query.postId);
    }
  }, []);

  async function getPostsOnReact(id) {
    try {
      const response = await getPost(id);

      setPostState(response.post);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div>
      {postState ? (
        <>
          <h1>Post Id {postState.id} </h1>
          <p>{postState.posts}</p>
        </>
      ) : (
        <div>LOADING</div>
      )}
      <button onClick={(e) => router.push("/posts")}>Go to All posts</button>
    </div>
  );
}
singlePost.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { data: null };
  }
  console.log("ctx query", ctx.query);
  const res = await getPost(ctx.query.postId);
  return { data: res.post };
};
