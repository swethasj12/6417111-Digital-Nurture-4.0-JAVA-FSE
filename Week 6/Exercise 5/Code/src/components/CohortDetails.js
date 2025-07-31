// CohortDetails.jsx
import React from 'react';
import styles from './CohortDetails.module.css';

const cohorts = [
  {
    name: "INTADMDP10 - .NET FSD",
    startDate: "22-Feb-2022",
    status: "scheduled",
    coach: "Aarthma",
    trainer: "Jojo Jose",
  },
  {
    name: "ADM21JF014 - Java FSD",
    startDate: "10-Sep-2021",
    status: "ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith",
  },
  {
    name: "CDBJF21025 - Java FSD",
    startDate: "24-Dec-2021",
    status: "ongoing",
    coach: "Aarthma",
    trainer: "John Doe",
  },
];

const CohortDetails = () => {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort, index) => (
        <div key={index} className={styles.box}>
          <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
            {cohort.name}
          </h3>
          <dl>
            <dt>Started On</dt>
            <dd>{cohort.startDate}</dd>

            <dt>Current Status</dt>
            <dd>{cohort.status.charAt(0).toUpperCase() + cohort.status.slice(1)}</dd>

            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>

            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default CohortDetails;
