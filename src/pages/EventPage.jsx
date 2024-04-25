import React from 'react';
import './Event.css'; // Import file CSS kustom

const EventPage = () => {
  return (
    <div className="event-container">
      <h2 className="event-title">Last Event</h2>
      <div className="event-card">
        <img src="poster1.jpg" alt="Event Poster 1" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 10 November 2023 Transformational Sales Conference 2023</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
      <div className="event-card">
        <img src="poster2.jpg" alt="Event Poster 2" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 07-09 September 2023 TBN Asia Conference 2023</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
      <div className="event-card">
        <img src="poster3.jpg" alt="Event Poster 3" className="event-image" />
        <div className="event-details">
          <p className="event-text">TBN Idn 26 Januari 2024 FROM PASSION TO IMPACT</p>
          <button className="event-button">Look up the conference</button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
