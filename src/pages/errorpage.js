import { useRouteError } from "react-router-dom";

import MainNav from "../component/mainNav";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <MainNav />
      <main id="error-page">
        <h1>Oops!</h1>
        <p>Looks like something went wrong.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </>
  );
};
