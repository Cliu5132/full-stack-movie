import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // handler years
  const [selectedYears, setSelectedYears] = useState({
    "startYear": 1975,
    "endYear": 2012
  });
  const handleYearsChange = (newValue) => {
    setSelectedYears(newValue);
  };

  // handle movies
  const [movies, setMovies] = useState([])

  // handle persons
  const [persons, setPersons] = useState([])

  //handle form type
  const [tableType, setTableType] = useState('Movie')

  // handle detailed movies
  const [moviesDetail, setMoviesDetail] = useState([])

  return (
    <MovieContext.Provider value={{ selectedYears, handleYearsChange, movies, setMovies, tableType, setTableType, persons, setPersons, moviesDetail, setMoviesDetail }}>
      {children}
    </MovieContext.Provider>
  );
};
