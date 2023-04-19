import { useEffect, useState } from "react";

import EventsList from "../component/EventsList";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_EventsAPI);

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData?.events ?? resData);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
};

export default EventsPage;
