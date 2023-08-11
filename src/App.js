import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { lazy, Suspense } from "react";

import RootLayout from "./pages/rootLayout";
import HomePage from "./pages/home";
import ProductRootLayout from "./pages/productsRoot";
import ProductContainerFluidExample from "./pages/products";
import ProductDetailPage from "./pages/productDetail";
// import EventsRootLayout from "./pages/EventsRoot";
// import EventsPage, { EventLoader } from "./pages/Events";
// import EventDetailPage, {
//   EventPageDataLoader,
//   deleteEventAction,
// } from "./pages/EventDetail";
// import EditEventPage from "./pages/EditEvent";
// import NewEventPage from "./pages/NewEvent";
import { eventUploadAction } from "./component/EventForm";
import NewsletterPage, { newsletterSignupAction } from "./pages/Newsletter";
import { ErrorPage } from "./pages/errorpage";
import AuthenticationPage, { authAction } from "./pages/Authentication";
import { LogoutAction } from "./pages/logout";
import {
  getEventsAccessAuthToken,
  checkEventsAccessToken,
} from "./utils/authUtil";

const EventsRootLayout = lazy(() => import("./pages/EventsRoot"));
const EventsPage = lazy(() => import("./pages/Events"));
const EventDetailPage = lazy(() => import("./pages/EventDetail"));
const EditEventPage = lazy(() => import("./pages/EditEvent"));
const NewEventPage = lazy(() => import("./pages/NewEvent"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
      loader={getEventsAccessAuthToken}
      id="root"
    >
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

      <Route
        path="/events"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <EventsRootLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <EventsPage />
            </Suspense>
          }
          loader={() =>
            import("./pages/Events").then((module) => module.EventLoader())
          }
        />
        <Route
          path=":eventId"
          loader={({ request, params }) =>
            import("./pages/EventDetail").then((module) =>
              module.EventPageDataLoader({ request, params })
            )
          }
          id="event-detail"
        >
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <EventDetailPage />
              </Suspense>
            }
            action={({ request, params }) =>
              import("./pages/EventDetail").then((module) =>
                module.deleteEventAction({ request, params })
              )
            }
          />
          <Route
            path="edit"
            loader={checkEventsAccessToken}
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <EditEventPage />
              </Suspense>
            }
            action={eventUploadAction}
          />
        </Route>
        <Route
          path="new"
          loader={checkEventsAccessToken}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <NewEventPage />
            </Suspense>
          }
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
