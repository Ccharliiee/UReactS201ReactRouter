import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../component/EventForm";

const EditEventPage = () => {
  return (
    <EventForm method="patch" event={useRouteLoaderData("event-detail")} />
  );
};

export default EditEventPage;
