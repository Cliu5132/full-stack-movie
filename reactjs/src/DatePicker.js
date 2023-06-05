import React, { useContext } from 'react';
import { MovieContext } from './Context';

const DatePicker = () => {
  const { selectedYears, handleYearsChange, setMovies, setTableType } = useContext(MovieContext);

  const {
    startYear,
    endYear,
  } = selectedYears

  const handleStartYearChange = (event) => {
    handleYearsChange({
      ...selectedYears,
      startYear: event.target.value
    });
  };

  const handleEndYearChange = (event) => {
    handleYearsChange({
      ...selectedYears,
      endYear: event.target.value
    });
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

  const getFilteredMovies = async () => {
    setTableType('Movie');
    try {
      const url = `http://localhost:8000/movies-btw-years?startYear=${startYear}&endYear=${endYear}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.body)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='Filter-Block'>
      <div className='Filter-Header'>
        <h1>Filter Movies By Released Year</h1>
      </div>
      <div className='Filter-Body'>
        <div className='Filter-Row'>
        <label htmlFor="year-start">Select Start Year </label>
          <select id="year-start" value={startYear} onChange={handleStartYearChange}>
            <option>Select</option>
            {renderYearOptions()}
          </select>
        </div>        
        <div className='Filter-Row'>
          <label htmlFor="year-end">Select End Year </label>
          <select id="year-end" value={endYear} onChange={handleEndYearChange}>
            <option>Select</option>
            {renderYearOptions()}
          </select>
        </div>
        <button className='Button-Controller' onClick={getFilteredMovies}>Filter Movies</button>
      </div>
    </div>
  );
};

export default DatePicker;
