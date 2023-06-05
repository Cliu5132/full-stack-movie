import React, { useState } from 'react';
import DatePicker from './DatePicker';

const Controller = () => {
  return (
    <div className='Main-Controller'>
      <button className='Button-Controller'>Movies Full List</button>
      <div className='Filter-Block'>
        <p>Filter Movies By Released Year</p>
        <DatePicker/>
        <button className='Button-Controller'>Filter Movies</button>
      </div>
      <button className='Button-Controller'>Movies Full List</button>
    </div>
  );
};

export default Controller;