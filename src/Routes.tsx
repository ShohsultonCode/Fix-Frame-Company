import Layout from "Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const News = lazy(() => import("pages/News"));
const Home = lazy(() => import("pages/Home"));
const Error = lazy(() => import("pages/Error"));
const Contact = lazy(() => import("pages/Contact"));
const NewsView = lazy(() => import("pages/NewsView"));
const Services = lazy(() => import("pages/Services"));
const Portfolio = lazy(() => import("pages/Portfolio"));
const ServicesView = lazy(() => import("pages/ServicesView"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Services />,
        path: "/pages/services",
      },
      {
        element: <ServicesView />,
        path: "/pages/services/:id",
      },
      {
        element: <Portfolio />,
        path: "/pages/portfolio",
      },
      {
        element: <News />,
        path: "/pages/news",
      },
      {
        element: <Contact />,
        path: "/pages/contact",
      },
      {
        element: <NewsView />,
        path: "/pages/news/:id",
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
