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
import EventDetailPage, { EventItemLoader } from "./pages/EventDetail";
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
        <Route path=":eventId" loader={EventItemLoader} id="event-detail">
          <Route index element={<EventDetailPage />} />
          <Route path="edit" element={<EditEventPage />} />
        </Route>
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
