// src/Components/CalculateScore.jsx
import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ Name, School, Total, MaxMarks = 500 }) {
  // Convert Total and MaxMarks to numbers
  const totalNum = Number(Total);
  const maxMarksNum = Number(MaxMarks);

  let percentage = "N/A";
  if (!isNaN(totalNum) && !isNaN(maxMarksNum) && maxMarksNum > 0) {
    percentage = ((totalNum / maxMarksNum) * 100).toFixed(2);
  }

  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total} / {MaxMarks}</p>
      <p><strong>Percentage:</strong> {percentage}%</p>
    </div>
  );
}

export default CalculateScore;
