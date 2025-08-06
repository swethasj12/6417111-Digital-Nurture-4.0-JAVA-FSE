import React from 'react';

function UserGreeting() {
  return <h2>Welcome back</h2>;
}

function GuestGreeting() {
  return <h2>Please sign up.</h2>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

export default Greeting;
