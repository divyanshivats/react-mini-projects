import { useState } from 'react'
import './App.css'
import Country from './component/Country'
import Holiday from './component/Holiday';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);


  return (
    <>
      <Country setSelectedCountry = {setSelectedCountry}/>
      <Holiday selectedCountry = {selectedCountry}/>
    </>
  )
}

export default App
