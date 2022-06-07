import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { config } from "../../config";
export interface Post {
  title: string;
  body: string;
  id: string;
}
export function Home() {
  const { data } = useSWR(`${config.endpoint}/posts`);
  return (
    <div>
      <Helmet>
        <title>Home - Seo friendly</title>
        <meta name="description" content="Simple blog page with friendly SEO" />
      </Helmet>

      <div className="w-1/2 mx-auto py-5">
        {data.map((post: Post) => (
          <div key={post.id} id={post.id}>
            <Link to={`/article/${post.id}`}>
              <h2 className="capitalize text-xl font-medium hover:text-indigo-500">
                {post.title}
              </h2>
            </Link>
            <p>{post.body}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
