import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getBlogs } from "../utility/index";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
    }, []);

    const handleDelete = id => {
        deleteBlog(id);
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs);
      };

      if (blogs.length === 0) {
        return (<div className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-124px)]">
            <h3 className="text-3xl text-gray-500 font-semibold">No Bookmarks Found</h3>
            <Link
              to="/blogs"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black text-lg font-semibold group-hover:text-white">
                Browse Blogs
              </span>
            </Link>
        </div>)
      }

    return (
        <div className="max-w-6xl mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5 py-10">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deleteAble={true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;