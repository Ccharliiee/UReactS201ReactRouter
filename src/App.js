import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomeNavScrollExample from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNavScrollExample />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
