import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import Login from './Login';
import ConfirmedBooking from './ConfirmedBooking';
import Footer from './Footer';

const Main = () => {
  const seedRandom = function(seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return function() {
      return (s = s * a % m) / m;
    };
  };

  const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function(formdata) {
    localStorage.setItem('loginData', JSON.stringify(formdata));
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };

  function updateTimes(state, action) {
    return { availableTimes: fetchAPI(new Date(action.date)) };
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);
  const [bookingRecords, setBookingRecords] = useState(null); // State to store booking records
  const navigate = useNavigate();

  function SubmitForm(formData) {
    if (submitAPI(formData)) {
      setBookingRecords(formData); // Store booking records in state
      navigate('/confirm', { state: { bookingRecords: [formData] } }); // Navigate to confirmation page with state
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/booking' element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} SubmitForm={SubmitForm} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/confirm' element={<ConfirmedBooking />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </main>
  );
}

export default Main;