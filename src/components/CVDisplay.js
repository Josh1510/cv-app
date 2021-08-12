import React from 'react';

const CVDisplay = ({ personalData }) => {
  const { firstName, lastName } = personalData;

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default CVDisplay;
