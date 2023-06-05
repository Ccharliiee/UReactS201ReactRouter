import { json, useRouteLoaderData, redirect } from "react-router-dom";

import EventItem from "../component/EventItem";

const EventDetailPage = () => {
  return (
    <>
      <EventItem event={useRouteLoaderData("event-detail")} />
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

export const deleteEventAction = async ({ params, request }) => {
  const eventId = params.eventId;
  const response = await fetch(
    process.env.REACT_APP_EventAPI + eventId + ".json",
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
};
