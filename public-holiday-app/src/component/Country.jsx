import React, { useState } from "react";
import './Country.css'
const Country = ({setSelectedCountry}) => {
    

  const countries = [
     { name: "Albania", code: "AL" },
  { name: "Andorra", code: "AD" },
  { name: "Austria", code: "AT" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Bulgaria", code: "BG" },
  { name: "Croatia", code: "HR" },
  { name: "Czechia", code: "CZ" },
  { name: "Estonia", code: "EE" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Hungary", code: "HU" },
  { name: "Ireland", code: "IE" },
  { name: "Italy", code: "IT" },
  { name: "Latvia", code: "LV" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Malta", code: "MT" },
  { name: "Mexico", code: "MX" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Netherlands", code: "NL" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Romania", code: "RO" },
  { name: "San Marino", code: "SM" },
  { name: "Serbia", code: "RS" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "South Africa", code: "ZA" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Vatican City", code: "VA" }
  ];

  const handleChange = (e) =>{
    setSelectedCountry(e.target.value)
  }
  return (
    <div className="dropdown-container">
      <select onChange={handleChange}>
        <option value="">
            -- Choose a country --
        </option>
        {
           countries.map( (country) => (
             <option key={country.code} value={country.code}>
                {country.name}
             </option>
           )) 
        }
      </select>

      
    </div>
  );
};

export default Country;
