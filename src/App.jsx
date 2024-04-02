import "./rountes/homepage/layout/layout.scss";
import HomePage from "./rountes/homepage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./rountes/homepage/listPage/listPage";
import Layout from "./rountes/homepage/layout/layout";
import SinglePage from "./rountes/homepage/singlePage/singlePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        }, 
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
