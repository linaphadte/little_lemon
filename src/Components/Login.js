import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [login, setLogin] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: ""
  });

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...login, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setLogin({ firstname: "", lastname: "", phonenumber: "", email: "", password: "" });

    if (submitAPI(newRecord)) {
      navigate("/booking", { state: { bookingRecords: [...records, newRecord] } });
    }
  };

  
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="booking-container">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
      </div>
      <div>
        <h4>Login to collect points</h4>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                value={login.firstname}
                onChange={handleInput}
                name="firstname"
                id="firstname"
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                value={login.lastname}
                onChange={handleInput}
                name="lastname"
                id="lastname"
              />
            </div>

            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                value={login.phonenumber}
                onChange={handleInput}
                name="phonenumber"
                id="phonenumber"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={login.email}
                onChange={handleInput}
                name="email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={login.password}
                onChange={handleInput}
                name="password"
                id="password"
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </fieldset>
          <div className="submitbtn">
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const submitAPI = (formData) => {
  console.log("Form data submitted:", formData);
  return true; 
};

export default Login;