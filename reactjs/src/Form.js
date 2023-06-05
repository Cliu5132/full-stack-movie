import React, { useState } from 'react';

const movies = [
  "The Matrix",
  "The Matrix Reloaded",
  "The Matrix Revolutions",
  "The Devil's Advocate",
  "A Few Good Men",
  "Top Gun",
  "Jerry Maguire",
  "Stand By Me",
  "As Good as It Gets",
  "What Dreams May Come",
  "Snow Falling on Cedars",
  "You've Got Mail",
  "Sleepless in Seattle",
  "Joe Versus the Volcano",
  "When Harry Met Sally",
  "That Thing You Do",
  "The Replacements",
  "RescueDawn",
  "The Birdcage",
  "Unforgiven",
  "Johnny Mnemonic",
  "Cloud Atlas",
  "The Da Vinci Code",
  "V for Vendetta",
  "Speed Racer",
  "Ninja Assassin",
  "The Green Mile",
  "Frost/Nixon",
  "Hoffa",
  "Apollo 13",
  "Twister",
  "Cast Away",
  "One Flew Over the Cuckoo's Nest",
  "Something's Gotta Give",
  "Bicentennial Man",
  "Charlie Wilson's War",
  "The Polar Express",
  "A League of Their Own"
]

const Form = () => {
  const [data, setData] = useState(movies);
  // const [filteredData, setFilteredData] = useState(data);

  // const handleRowClick = (id) => {
  //   // Perform the action when a row is clicked
  //   console.log(`Row ${id} clicked`);
  // };

  // const handleFilterChange = (e) => {
  //   const searchValue = e.target.value.toLowerCase();
  //   const filteredRows = data.filter((row) =>
  //     row.name.toLowerCase().includes(searchValue)
  //   );
  //   setFilteredData(filteredRows);
  // };

  return (
    <div>
      {/* <input type="text" onChange={handleFilterChange} placeholder="Filter" /> */}
      <table>
        <tbody>
          {data.map((row, index) => (
            <tr className='Row-Container' key={index}>
              <td>{row}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
