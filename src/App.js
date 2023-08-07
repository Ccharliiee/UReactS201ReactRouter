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
import EventDetailPage, {
  EventPageDataLoader,
  deleteEventAction,
} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import { eventUploadAction } from "./component/EventForm";
import NewsletterPage, { newsletterSignupAction } from "./pages/Newsletter";
import { ErrorPage } from "./pages/errorpage";
import AuthenticationPage, { authAction } from "./pages/Authentication";
import { LogoutAction } from "./pages/logout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route
        path="/auth"
        element={<AuthenticationPage />}
        action={authAction}
      />
      <Route path="/logout" action={LogoutAction} />
      <Route index element={<HomePage />} />
      <Route path="/products" element={<ProductRootLayout />}>
        <Route index element={<ProductContainerFluidExample />} />
        <Route path=":productId" element={<ProductDetailPage />} />
      </Route>

      <Route path="/events" element={<EventsRootLayout />}>
        <Route index element={<EventsPage />} loader={EventLoader} />
        <Route path=":eventId" loader={EventPageDataLoader} id="event-detail">
          <Route
            index
            element={<EventDetailPage />}
            action={deleteEventAction}
          />
          <Route
            path="edit"
            element={<EditEventPage />}
            action={eventUploadAction}
          />
        </Route>
        <Route
          path="new"
          element={<NewEventPage />}
          action={eventUploadAction}
        />
      </Route>

      <Route
        path="/newsletter"
        element={<NewsletterPage />}
        action={newsletterSignupAction}
      />
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
