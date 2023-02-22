import { createBrowserRouter } from "react-router-dom";
import Favorite from "../../components/Favorite/Favorite";
import Playlist from "../../components/Playlist/Playlist";
import Search from "../../components/Search/Search";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../Pages/Home/Home";

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
    ],
  },
]);
