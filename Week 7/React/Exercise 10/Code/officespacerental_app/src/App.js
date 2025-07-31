import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space , at Affordable Range</h1>;

  const officeList = [
  // {
  //   Name: "DBS",
  //   Rent: 50000,
  //   Address: "Chennai",
  //   Image: "https://images.unsplash.com/photo-1573164574231-4aa1d3d1b40e" // ✅ valid image
  // },
  {
    Name: "WeWork",
    Rent: 70000,
    Address: "Bangalore",
    Image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  }
];
  const officeDetails = officeList.map((item, index) => {
    let rentColor = {
      color: item.Rent <= 60000 ? 'red' : 'green'
    };

    return (
      <div key={index}>
        <img src={item.Image} width="250" height="250" alt="Office Space" />
        <h1>Name: {item.Name}</h1>
        <h3 style={rentColor}>Rent: Rs. {item.Rent}</h3>
        <h3>Address: {item.Address}</h3>
      </div>
    );
  });

  return (
    <div className="App">
      {heading}
      {officeDetails}
    </div>
  );
}

export default App;
