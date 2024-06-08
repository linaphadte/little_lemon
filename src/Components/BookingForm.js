import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurant1 from '../images/restaurant.jpg';
import restaurant2 from '../images/restaurant chef B.jpg';


const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [seating, setSeating] = useState("Indoor");

  const [bookingRecords, setBookingRecords] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { date, times, guests, occasion, seating, id: new Date().getTime().toString() };
    setBookingRecords([...bookingRecords, newRecord]);
    if (submitAPI(newRecord)) {
      props.SubmitForm(newRecord);
      navigate("/confirm", { state: { bookingRecords: [...bookingRecords, newRecord] } });
    } else {
      
    }
  };


  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.dispatch({ type: 'update', date: e.target.value });
  };

  return (
    <div>
      <div className="booking-container">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <div className="image-container">
            <img src={restaurant1} alt=''/>
            <img src={restaurant2} alt=''/>
        </div>
        <div>
          <section>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="book-date">Choose Date</label>
                  <input id="book-date" value={date} onChange={handleDateChange} type="date" required />
                </div>

                <div>
                  <label htmlFor="book-time">Choose Time</label>
                  <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                    <option value="">Select a Time</option>
                    {props.availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="book-guests">Number of Guests</label>
                  <input id="book-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                </div>

                <div>
                  <label htmlFor="book-occasion">Occasion</label>
                  <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                </div>

                <div>
                  <label>Seating Preference</label>
                  <div>
                    <input 
                      type="radio" 
                      id="indoor" 
                      name="seating" 
                      value="Indoor" 
                      checked={seating === "Indoor"}
                      onChange={(e) => setSeating(e.target.value)} 
                      required 
                      aria-label="Indoor Seating"
                    />
                    <label htmlFor="indoor">Indoor</label>
                  </div>
                  <div>
                    <input 
                      type="radio" 
                      id="outdoor" 
                      name="seating" 
                      value="Outdoor" 
                      checked={seating === "Outdoor"}
                      onChange={(e) => setSeating(e.target.value)} 
                      required 
                      aria-label="Outdoor Seating"
                    />
                    <label htmlFor="outdoor">Outdoor</label>
                  </div>
                </div>
                </fieldset>

                <div className="btnReceive">
                  <button aria-label='On Click' type='submit' value="Make your Reservation">Make Your Reservation</button> 
                </div>

            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

const submitAPI = (bookingData) => {
  console.log("Form data submitted:", bookingData);
  return true; 
};

export default BookingForm;