import React from 'react';

function UserBooking() {
  return (
    <div>
      <h3>Book Your Ticket</h3>
      <form>
        <label>
          Destination:
          <input type="text" name="destination" />
        </label><br />
        <label>
          Date:
          <input type="date" name="date" />
        </label><br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default UserBooking;
