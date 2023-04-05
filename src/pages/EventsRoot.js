import { Outlet } from "react-router-dom";

import EventsNavigation from "../component/EventsNavigation";

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
