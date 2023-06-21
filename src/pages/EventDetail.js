import { Suspense } from "react";

import {
  useRouteLoaderData,
  json,
  defer,
  Await,
  redirect,
} from "react-router-dom";

import EventsList from "../component/EventsList";
import EventItem from "../component/EventItem";
import { EventLoaderFunc as eventsloader } from "./Events";

const EventDetailPage = () => {
  const { eventData, eventsData } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading eventData...</p>}
      >
        <Await resolve={eventData}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading eventsData...</p>}
      >
        <Await resolve={eventsData}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const eventloader = async (eventId) => {
  const response = await fetch(process.env.REACT_APP_EventAPI + eventId);
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    throw json({ message: "Event detail data fetch failed" }, { status: 500 });
  }
};

export const EventPageDataLoader = async ({ request, params }) => {
  return defer({
    eventData: await eventloader(params.eventId),
    eventsData: eventsloader(),
  });
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
