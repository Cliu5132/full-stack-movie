import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const renderYearOptions = () => {
    const years = [];

    for (let year = 1975; year <= 2012; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return years;
  };

  return (
    <div>
      <label htmlFor="year-picker">Select Year:</label>
      <select id="year-picker" value={selectedYear} onChange={handleYearChange}>
        <option value="">Select</option>
        {renderYearOptions()}
      </select>
    </div>
  );
};

export default DatePicker;
