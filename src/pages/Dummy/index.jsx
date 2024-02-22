import React, { useState } from 'react';

function Dummy() {
  // State to store checkbox values
  const [checkboxValues, setCheckboxValues] = useState([]);

  // Handler function to toggle checkbox values
  const handleCheckboxChange = (value) => {
    // Check if the value is already in the array
    if (checkboxValues.includes(value)) {
      // If it is, remove it
      setCheckboxValues(checkboxValues.filter((item) => item !== value));
    } else {
      // If it's not, add it
      setCheckboxValues([...checkboxValues, value]);
    }
  };

  console.log('checkboxValues',checkboxValues)

  return (
    <div>
      {/* Render checkboxes and attach onChange event */}
      <input
        type="checkbox"
        value="checkbox1"
        checked={checkboxValues.includes('checkbox1')}
        onChange={() => handleCheckboxChange('checkbox1')}
      />
      <label htmlFor="checkbox1">Checkbox 1</label>

      <input
        type="checkbox"
        value="checkbox2"
        checked={checkboxValues.includes('checkbox2')}
        onChange={() => handleCheckboxChange('checkbox2')}
      />
      <label htmlFor="checkbox2">Checkbox 2</label>

      {/* Display the current state of the array */}
      <div>Selected Checkboxes: {checkboxValues.join(', ')}</div>
    </div>
  );
}

export default Dummy;
