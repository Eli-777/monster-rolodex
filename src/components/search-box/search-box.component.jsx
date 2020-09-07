import React from 'react';
import './search-box.style.css'

function searchBox({placeholder, handleChange}) {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange} 
    />
  );
}

export default searchBox;