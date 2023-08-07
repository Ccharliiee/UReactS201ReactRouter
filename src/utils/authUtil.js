import { redirect } from "react-router-dom";

export const getEventsAccessAuthToken = () => {
  const eventsAccessToken = localStorage.getItem("eventsAccess");
  if (!eventsAccessToken) {
    return null;
  }
  if (getEventsAccessDuration() <= 0) {
    return "EXPIRED";
  }

  return eventsAccessToken;
};

export const checkEventsAccessToken = () => {
  return getEventsAccessAuthToken() ? null : redirect("/auth");
};

export const getEventsAccessDuration = () => {
  const localExpirationDate = new Date(
    localStorage.getItem("eventsAccessExpiration")
  );
  const now = new Date();
  const EventsAccessDuration = localExpirationDate.getTime() - now.getTime();
  return EventsAccessDuration;
};
