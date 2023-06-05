import React, { useContext } from 'react';
import { MovieContext } from './Context';

const MoviesTable = () => {

  const { movies, setPersons, setTableType } = useContext(MovieContext);

  const getPersonsOnMovieClick = async (movieTitle) => {
    setTableType('Person');

    try {
      const url = `http://localhost:8000/persons-by-movie-title?movieTitle=${movieTitle}`;
      const response = await fetch(url);
      const data = await response.json();
      setPersons(data.body)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='Form-Container'>
      <table>
        <thead>
          <tr className='Thead-Container'>
            <th className='Td-Long'>Movie Title</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((row, index) => (
              <tr className='Row-Container' key={index} onClick={async () => await getPersonsOnMovieClick(row)}>
                <td className='Td-Long'>{row}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const PersonsTable = () => {
  const { persons, setMoviesDetail, setTableType } = useContext(MovieContext);

  const getMoviesOnPersonClick = async (personName) => {
    setTableType('MoviesDetail');

    try {
      const url = `http://localhost:8000/movies-by-person-name?personName=${personName}`;
      const response = await fetch(url);
      const data = await response.json();
      setMoviesDetail(data.body)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='Form-Container'>
      <table>
        <thead>
          <tr className='Thead-Container'>
            <th className='Td-Middle'>Person Name</th>
            <th className='Td-Middle'>Role In Movie</th>
          </tr>
        </thead>
        <tbody>
          {
            persons.map(({personName, connectionType}, index) => (
              <tr className='Row-Container' key={index} onClick={async () => await getMoviesOnPersonClick(personName)}>
                <td className='Td-Middle'>{personName}</td>
                <td className='Td-Middle'>{connectionType}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const MoviesDetailTable = () => {
  const { moviesDetail } = useContext(MovieContext);

  return (
    <div className='Form-Container'>
      <table>
        <thead>
          <tr className='Thead-Container'>
            <th className='Td-Middle'>Movie Title</th>
            <th className='Td-Short'>Role In Movie</th>
            <th className='Td-Short'>Released Year</th>
          </tr>
        </thead>
        <tbody>
          {
            moviesDetail.map(({movieName, connectionType, releasedYear}, index) => (
              <tr className='Row-Container No-Hover' key={index}>
                <td className='Td-Middle'>{movieName}</td>
                <td className='Td-Short'>{connectionType}</td>
                <td className='Td-Short'>{releasedYear}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const GetTableByType = (tableType) => {
  let Table;

  switch (tableType) {
    case 'Movie':
      Table = MoviesTable();
      break;
    case 'Person':
      Table = PersonsTable();
      break;
    case 'MoviesDetail':
      Table = MoviesDetailTable();
      break;
    default:
      Table = (<p>Some thing went wrong!</p>);
  }

  return Table;
};


const Form = () => {
  const { tableType } = useContext(MovieContext);
  console.log(tableType)
  return GetTableByType(tableType);
};

export default Form;
