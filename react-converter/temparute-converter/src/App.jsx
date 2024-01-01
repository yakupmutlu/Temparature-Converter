import { useState } from 'react'
import './App.css'
import SearchBar from './Components/Convert'

const App = () => {
  const [searchResult, setSearchResult] = useState('')
  const [convertedValue, setConvertedValue] = useState(null)

  const handleSearch = (query) => {
    console.log('Çevrilecek Değer:', query)
    setSearchResult(`Çevrilecek Değer: ${query}`)
  };

  const handleConvertToFahrenheit = (query) => {
    const celsius = parseFloat(query)
    const fahrenheit = (celsius * 9/5) + 32
    setConvertedValue(`Fahrenheit değeri: ${fahrenheit.toFixed(2)}`)
  };

  const handleConvertToKelvin = (query) => {
    const celsius = parseFloat(query)
    const kelvin = celsius + 273.15;
    setConvertedValue(`Kelvin değeri: ${kelvin.toFixed(2)}`);
  };

  return (
    <div>
      <h1 className='h1'>DERECE ÇEVİRME</h1>
      <SearchBar
        onSearch={handleSearch}
        onConvertToFahrenheit={handleConvertToFahrenheit}
        onConvertToKelvin={handleConvertToKelvin}
      />
      <div className='search'>{searchResult}</div>
      <div className='search'>{convertedValue}</div>
    </div>
  )
}

export default App
