import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../services/ticketmaster';
import './EventDetail.css';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventDetail();
  }, [id]);

  const fetchEventDetail = async () => {
    try {
      const data = await getEventById(id);
      setEvent(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching event:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading event details...</div>;
  }

  if (!event) {
    return <div className="error">Event not found</div>;
  }

  const venue = event._embedded?.venues?.[0];

  return (
    <div className="event-detail">
      <div className="detail-container">
        <div className="detail-image">
          <img src={event.images[0].url} alt={event.name} />
        </div>
        
        <div className="detail-content">
          <h1 className="detail-title">{event.name}</h1>
          
          <div className="detail-info">
            <div className="info-item">
              <strong>Date:</strong>
              <span>{event.dates.start.localDate}</span>
            </div>
            <div className="info-item">
              <strong>Time:</strong>
              <span>{event.dates.start.localTime || 'TBA'}</span>
            </div>
            <div className="info-item">
              <strong>Venue:</strong>
              <span>{venue?.name}</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>
                {venue?.city?.name}, {venue?.state?.stateCode}
              </span>
            </div>
          </div>

          {event.info && (
            <div className="detail-description">
              <h2>About This Event</h2>
              <p>{event.info}</p>
            </div>
          )}

          <div className="detail-actions">
            {event.url && (
              <a 
                href={event.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ticket-button"
              >
                Get Tickets
              </a>
            )}
            <Link to="/events" className="back-button">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;