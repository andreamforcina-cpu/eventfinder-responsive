const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export const getEvents = async (city = 'New York', size = 20) => {
  const response = await fetch(
    `${BASE_URL}/events.json?apikey=${API_KEY}&size=${size}&city=${city}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  
  const data = await response.json();
  return data._embedded?.events || [];
};

export const getEventById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/events/${id}.json?apikey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch event details');
  }
  
  return await response.json();
};