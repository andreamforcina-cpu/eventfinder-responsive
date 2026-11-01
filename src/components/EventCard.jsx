import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ event }) {
  const venue = event._embedded?.venues?.[0];
  
  return (
    <div className="event-card">
      <img 
        src={event.images[0].url} 
        alt={event.name}
        className="event-image"
      />
      <div className="event-info">
        <h3 className="event-title">{event.name}</h3>
        <p className="event-date">
          📅 {event.dates.start.localDate}
        </p>
        <p className="event-venue">
          📍 {venue?.name}
        </p>
        <Link to={`/events/${event.id}`} className="view-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;