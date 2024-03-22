import { createBrowserRouter } from 'react-router-dom';
import Author from '../components/Author.jsx';
import Content from '../components/Content.jsx';
import MainLayout from '../layout/MainLayout.jsx';
import Blog from '../pages/Blog.jsx';
import Blogs from '../pages/Blogs.jsx';
import Bookmarks from '../pages/Bookmarks.jsx';
import Home from '../pages/Home.jsx';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=30&top=7'),
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ],
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>,
        },
      ],
    },
  ]);