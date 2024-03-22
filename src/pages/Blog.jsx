import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { saveBlog } from "../utility/index";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const blog = useLoaderData();

  const {
    title,
    comments_count,
    public_reactions_count,
    reading_time_minutes,
    published_at,
  } = blog;

  const handleBookmark = blog => {
    saveBlog(blog);
  };
  return (
    <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
        <div className="space-y-6">
          <h1 className="text-4xl text-justify font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
            <p className="font-medium">
              {reading_time_minutes} mins read •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>
            <p className="flex-shrink-0 mt-3 font-medium md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100">
            <Link
              onClick={() => setTabIndex(0)}
              to=""
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } dark:border-gray-400 dark:text-gray-400`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to={`author`}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } dark:border-gray-400 dark:text-gray-400`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div onClick={() => handleBookmark(blog)} className="text-2xl text-secondary border rounded-full bg-primary bg-opacity-15 hover:bg-opacity-25 hover:scale-105 overflow-hidden cursor-pointer p-2 ml-5">
              <MdBookmarkAdd />
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </article>
      <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
