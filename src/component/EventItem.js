import { Link, useSubmit, useRouteLoaderData } from "react-router-dom";

import classes from "./EventItem.module.css";

const EventItem = ({ event }) => {
  const eventAccessToken = useRouteLoaderData("root");
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure to delete this event?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {eventAccessToken && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
};

export default EventItem;
