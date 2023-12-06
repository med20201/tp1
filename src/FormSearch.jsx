import { useState } from 'react';

import PropTypes from 'prop-types';


import './style.css'

function FormSearch  ({ onSearch })  {
const [searchItem, setSearchItem] = useState('')



  function Search_Products (e)  {
    e.preventDefault()
    onSearch(searchItem)
  }

  return (
    <form >
      <input
        type="text"
        placeholder="Search Products .."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={Search_Products}>Search</button>
    </form>
  )
}

export default FormSearch;


FormSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };