import React, { useState } from 'react';
import './Twilio.css';

const TwilioCallingApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a request to the backend server to initiate the call
    fetch(`http://localhost:3000/make-call?phoneNumber=${phoneNumber}`)
      .then(response => response.text())
      .then(callSid => console.log(`Call SID: ${callSid}`))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Twilio Calling App</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"  // Add the name attribute with a valid value
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
        <button type="submit">Call</button>
      </form>
    </div>
  );
};

export default TwilioCallingApp;
