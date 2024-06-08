import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const { bookingRecords } = location.state || { bookingRecords: [] };

  return (
    <div className="confirm">
      <div>
        <h1>Booking has been <span>Confirmed!</span></h1>
      </div>
      <div>
        {bookingRecords.map((currElem) => {
          const { id, date, times, guests, occasion, seating } = currElem;
          return (
            <div className="showDataStyle" key={id}>
              <p>
                Your booking has been confirmed with the following details:
                <br />
                Date: {date}
                <br />
                Time: {times}
                <br />
                Number of Guests: {guests}
                <br />
                Occasion: {occasion}
                <br />
                Seating Preference: {seating}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConfirmedBooking;