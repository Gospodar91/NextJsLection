import { useState, useEffect } from "react";
import { getAllPosts } from "../../apiForExpress/requests";
import Link from "next/link";
export default function Posts({ posts }) {
  const [posstState, setPostsState] = useState(posts);
  // useEffect(() => {
  //   if (posstState) {
  //     getAllPostsOnReact();
  //   }
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
      <h1>Posts Page</h1>
      {/* {posstState && ( */}
      <>
        <ul>
          {posstState.map((el) => {
            return (
              <li key={el.id}>
                <Link as={`/posts/${el.id}`} href={`/posts/${el.id}`}>
                  <a> {el.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
      {/* )} */}
    </div>
  );
}
// Posts.getInitialProps = async (ctx) => {
//   console.log("ctx", ctx.pathname);
//   const res = await getAllPosts();
//   console.log("res", res);

//   return { posts: res.posts };
// };

// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering

export async function getServerSideProps(context) {
  const res = await getAllPosts();
  const posts = res.posts;
  return {
    props: { posts },
  };
}
//вызывается только на сервере и позволяет работать с БД напрямую
