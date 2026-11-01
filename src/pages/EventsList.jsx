import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/ticketmaster';
import './EventsList.css';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    async function fetchEvents() {
      try {
        const data = await getEvents();
        if (active) setEvents(data);
      } catch (error) {
        if (active) setError(error.message);
      } finally {
        if (active) setLoading(false);
      }
    }
    fetchEvents();
    return () => { active = false; };
  }, []);

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  if (error) return <div className="events-message" role="alert">{error}</div>;

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
          {!events.length && <p>No upcoming events found.</p>}
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default EventsList;
