import { useState } from "react"
import './Convert.css'
function SearchBar ({ onSearch, onConvertToFahrenheit, onConvertToKelvin }) {
    const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = () => {
    onSearch(query);
  }

  const handleConvertToFahrenheit = () => {
    onConvertToFahrenheit(query);
  }

  const handleConvertToKelvin = () => {
    onConvertToKelvin(query);
  }

  return (
    <div className="button-container">
      <input className="input"
        type="text"
        placeholder="Çevrilecek Değer"
        value={query}
        onChange={handleInputChange}
      />
      <button className="handlesearch" onClick={handleSearch}>Çevrilecek Değer</button>
      <button className="fahrenheit" onClick={handleConvertToFahrenheit}>Fahrenheit</button>
      <button className="kelvin" onClick={handleConvertToKelvin}>Kelvin</button>
    </div>
  )
}

export default SearchBar