import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";

const BlogCard = ({ blog, deleteAble, handleDelete }) => {
  const { id, title, description, cover_image, published_at } = blog;

  return (
    <div className="relative flex max-w-sm mx-auto group transition rounded-lg border-2 border-primary border-opacity-30 hover:border-secondary hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-900 p-2">
      <Link to={`/blog/${id}`}>
        <img
          role="presentation"
          className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-2 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="font-medium dark:text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p className="text-justify">{description}</p>
        </div>
      </Link>
      {deleteAble && (
        <div onClick={() => handleDelete(id)} className="absolute text-2xl text-secondary hover:text-primary bg-primary bg-opacity-20 hover:bg-opacity-30 cursor-pointer rounded-full p-2 -right-4 -top-4">
          <MdDeleteForever />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
    deleteAble: PropTypes.bool,
    handleDelete: PropTypes.func
}

export default BlogCard;
