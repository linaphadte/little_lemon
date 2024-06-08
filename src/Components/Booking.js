import React from 'react';
import BookingForm from './BookingForm';

const Booking = ({ availableTimes, dispatch, SubmitForm }) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} SubmitForm={SubmitForm} />
    </div>
  );
}

export default Booking;
