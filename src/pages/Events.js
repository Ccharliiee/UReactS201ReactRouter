import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Live music Rock The Dock with Pop Fiction Band Dance Music",
  },
  {
    id: "e2",
    title: "City Nature Challenge BioBlitz",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
