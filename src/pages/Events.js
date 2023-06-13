import { Suspense } from "react";

import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../component/EventsList";

const EventsPage = () => {
  const { eventsData } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={eventsData}>
        {(eventsData) => <EventsList events={eventsData} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const EventLoaderFunc = async () => {
  const response = await fetch(process.env.REACT_APP_EventsAPI);
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    throw json({ message: "Events data fetch failed" }, { status: 500 });
  }
};

export const EventLoader = () => {
  return defer({
    eventsData: EventLoaderFunc(),
  });
};
