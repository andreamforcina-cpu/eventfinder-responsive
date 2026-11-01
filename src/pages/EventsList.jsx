import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/ticketmaster';
import './EventsList.css';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Upcoming Events</h1>
        <p>Showing {events.length} events in New York</p>
      </div>
      
      <div className="events-container">
        <aside className="sidebar">
          <div className="filter-section">
            <h2>Filters</h2>
            <p className="filter-note">Category filters coming soon!</p>
          </div>
        </aside>
        
        <main className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default EventsList;