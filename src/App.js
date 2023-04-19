import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/rootLayout";
import HomePage from "./pages/home";
import ProductRootLayout from "./pages/productsRoot";
import ProductContainerFluidExample from "./pages/products";
import ProductDetailPage from "./pages/productDetail";
import EventsRootLayout from "./pages/EventsRoot";
import EventsPage, { EventLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import { ErrorPage } from "./pages/errorpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<ProductRootLayout />}>
        <Route index element={<ProductContainerFluidExample />} />
        <Route path=":productId" element={<ProductDetailPage />} />
      </Route>

      <Route path="/events" element={<EventsRootLayout />}>
        <Route index element={<EventsPage />} loader={EventLoader} />
        <Route path=":eventId" element={<EventDetailPage />} />
        <Route path=":eventId/edit" element={<EditEventPage />} />
        <Route path="new" element={<NewEventPage />} />
      </Route>
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
