import { createBrowserRouter } from "react-router-dom";
import Favorite from "../../Pages/Favorite/Favorite";
import Playlist from "../../Pages/Playlist/Playlist";
import Search from "../../Pages/Search/Search";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/details-track/:id/",
        element: <Details />,
      },
      {
        path: "/details-album/:id/",
        element: <Details />,
      },
    ],
  },
]);
