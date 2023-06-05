import { json, redirect } from "react-router-dom";

import EventForm from "../component/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch(process.env.REACT_APP_EventsAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 403) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
};
