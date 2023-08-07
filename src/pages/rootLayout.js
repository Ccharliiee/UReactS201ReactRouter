import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { getEventsAccessDuration } from "../utils/authUtil";

import MainNav from "../component/mainNav";

const RootLayout = () => {
  const eventAccessToken = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!eventAccessToken) {
      return;
    }

    if (eventAccessToken === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const eventsAccessDuration = getEventsAccessDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, eventsAccessDuration);
  }, [eventAccessToken, submit]);

  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
