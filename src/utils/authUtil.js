import { redirect } from "react-router-dom";

export const getEventsAccessAuthToken = () => {
  const eventsAccessToken = localStorage.getItem("eventsAccess");
  return eventsAccessToken;
};

export const checkEventsAccessToken = () => {
  return getEventsAccessAuthToken() ? null : redirect("/auth");
};
