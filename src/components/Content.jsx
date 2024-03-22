import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import placeholderImage from "../assets/404.jpg";

const Content = () => {
  const content = useLoaderData();
  const { title, cover_image, tags, body_html, url } = content;
  return (
    <div className="border-2 border-primary border-opacity-30 rounded-md dark:bg-gray-900 p-3">
      <img
        role="presentation"
        className="object-cover w-full rounded-md h-60 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 dark:border-gray-400">
        {tags.map((tag, index) => (
          <a
            key={index}
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="space-y-2 p-2">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-semibold hover:underline"
        >
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
