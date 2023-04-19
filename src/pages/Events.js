import { useLoaderData, json } from "react-router-dom";

import EventsList from "../component/EventsList";

const EventsPage = () => {
  const eventsData = useLoaderData();

  return <EventsList events={eventsData} />;
};

export default EventsPage;

export const EventLoader = async () => {
  const response = await fetch(process.env.REACT_APP_EventsAPI);
  if (response.ok) {
    return response;
  } else {
    throw json({ message: "Events data fetch failed" }, { status: 500 });
  }
};
