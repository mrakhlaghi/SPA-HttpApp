import FullComment from "./pages/Fullcomments/FullComment";
import HomePage from "./pages/HomePage";
import NewComment from "./pages/NewComment/NewComment";
import NotFound from "./pages/NotFoundPage";

const routes = [
  { path: "*", element: <HomePage /> },
  { path: "/new-comment", element: <NewComment /> },
  { path: "/comment/:id", element: <FullComment /> },
  { element: <NotFound /> },
];
export default routes;
