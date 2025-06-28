import React, { useEffect, useState } from "react";
import { getHolidays } from "..";
import "./Holiday.css";

const Holiday = ({ selectedCountry }) => {
  const [holidays, setHolidays] = useState(null);
  console.log(selectedCountry);

  // useEffect( () => {

  //     const fetchData = async() => {
  //         if(!selectedCountry) return;

  //         const data = await getHolidays(selectedCountry);
  //         console.log(data);
  //         setHolidays(data);

  //     }
  //     fetchData();
  // }, [selectedCountry])

  const getHoliday = async () => {
    const data = await getHolidays(selectedCountry);
    // console.log(data);
    setHolidays(data);
  };



  return (
    <div className="holiday-wrapper">
      <button className="fetch-btn" onClick={getHoliday}>
        Get Holidays!
      </button>

      <ul className="holiday-list">
        {holidays?.map((holiday, idx) => (
          <li className="holiday-item" key={idx}>
            <span className="date">{holiday.startDate}</span> —{" "}
            <span className="name">
           
            {holiday.name[0].text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Holiday;
