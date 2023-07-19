import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../component/EventForm";

const EditEventPage = () => {
  const { eventData } = useRouteLoaderData("event-detail");
  return <EventForm method="patch" event={eventData} />;
};

export default EditEventPage;
