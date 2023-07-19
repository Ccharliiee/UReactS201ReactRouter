export const getEventsAccessAuthToken = () => {
  const eventsAccessToken = localStorage.getItem("eventsAccess");
  return eventsAccessToken;
};
