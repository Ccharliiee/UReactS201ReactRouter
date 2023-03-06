import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomeNavScrollExample from "./pages/home";
import ProductContainerFluidExample from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNavScrollExample />,
  },
  {
    path: "products",
    element: <ProductContainerFluidExample />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
