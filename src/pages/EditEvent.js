import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../component/EventForm";

const EditEventPage = () => {
  return <EventForm event={useRouteLoaderData("event-detail")} />;
};

export default EditEventPage;
