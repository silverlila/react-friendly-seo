import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";

export default function Article() {
  const { id } = useParams();
  const { data } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div className="article">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.body} />
      </Helmet>

      <div className="w-1/2 h-screen flex items-center mx-auto p-5">
        <div>
          <h1 className="capitalize text-xl font-bold">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline pr-1 hover:text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={"2px"}
              >
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            {data.title}
          </h1>
          <br />
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
}
