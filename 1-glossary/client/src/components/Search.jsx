import React, { useState } from 'react';

const Search = ({ setUserInput }) => {
  const [currentInput, setCurrentInput] = useState('');
  const handleChange = e => setCurrentInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(currentInput)
    setCurrentInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={currentInput}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  )
};
export default Search;