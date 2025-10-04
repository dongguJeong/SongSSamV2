import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/App.css";
import Error from "./components/Error";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
