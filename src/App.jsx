import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import Layout from "./layout/Layout";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";

import { AppContext } from "./context/contextApi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult />,
      },
      {
        path: "/video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
