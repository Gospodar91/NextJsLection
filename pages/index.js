import { useState, useEffect } from "react";
import { getAllPosts } from "../apiForExpress/requests";
import Link from "next/link";
export default function MainPage({ postData }) {
  const [posstState, setPostsState] = useState(postData?.posts);
  // console.log("posstState", posstState);
  // useEffect(() => {
  //   getAllPostsOnReact();
  // }, []);

  // async function getAllPostsOnReact() {
  //   try {
  //     const response = await getAllPosts();
  //     setPostsState(response.posts);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }
  return (
    <div>
      <h1>I am MainPage </h1>
      <Link href={"/posts"}>
        <a> Go to posts</a>
      </Link>

      <ul>
        {posstState &&
          posstState.map((el) => {
            return <li key={el.id}>Post ID : {el.id}</li>;
          })}
      </ul>
    </div>
  );
}

export async function getStaticProps(ctx) {
  console.log("ctx", ctx.query);
  const postData = await getAllPosts();
  return {
    props: {
      postData,
    },
  };
}

// The data required to render the page is available at build time ahead of a user’s request.
// The data comes from a headless CMS.
// The data can be publicly cached (not user-specific).
// The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
