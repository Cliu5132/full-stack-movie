import React, { useContext }  from 'react';
import DatePicker from './DatePicker';
import { MovieContext } from './Context';

const Controller = () => {
  const { tableType } = useContext(MovieContext);

  // const getAllMovies = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/movies');
  //     const data = await response.json();
  //     setMovies(data.body)
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className='Main-Controller'>
      {/* <button className='Button-Controller' onClick={getAllMovies}>Movies Full List</button> */}
      <DatePicker/>
      <div className='Label-Container'>
        <div className='Label-Title'>
          <h1>Currently showing</h1>
        </div>
        <div className='Label-Content'>
          <p>{tableType.replace(/([A-Z])/g, ' $1').trim()} Table</p>
        </div>
      </div>
    </div>
  );
};

export default Controller;