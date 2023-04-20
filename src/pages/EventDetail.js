import { json, useLoaderData } from "react-router-dom";

import EventItem from "../component/EventItem";

const EventDetailPage = () => {
  const eventData = useLoaderData();

  return (
    <>
      <EventItem event={eventData} />
    </>
  );
};

export default EventDetailPage;

export const EventItemLoader = async ({ request, params }) => {
  const response = await fetch(
    process.env.REACT_APP_EventAPI + params.eventId + ".json"
  );
  if (response.ok) {
    return response;
  } else {
    throw json({ message: "Event detail data fetch failed" }, { status: 500 });
  }
};
