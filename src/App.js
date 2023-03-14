import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/rootLayout";
import HomeNavScrollExample from "./pages/home";
import ProductContainerFluidExample from "./pages/products";
import ProductDetailPage from "./pages/productDetail";
import { ErrorPage } from "./pages/errorpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomeNavScrollExample />} />
      <Route path="products" element={<ProductContainerFluidExample />} />
      <Route path="products/:productId" element={<ProductDetailPage />} />
    </Route>
  )
);

// const routerobj = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeNavScrollExample />,
//   },
//   {
//     path: "products",
//     element: <ProductContainerFluidExample />,
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
