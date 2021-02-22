import { useState, useEffect } from "react";
import { getAllPosts } from "../apiForExpress/requests";
import Link from "next/link";
export default function MainPage({ postData }) {
  console.log("props", postData);
  const [posstState, setPostsState] = useState(postData.posts);
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

// export async function getStaticProps(ctx) {
//   const postData = await getAllPosts();

//   return {
//     props: {
//       postData,
//     },
//   };
// }
// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering
