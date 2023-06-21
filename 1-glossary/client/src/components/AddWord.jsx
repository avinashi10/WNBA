import React, { useState } from 'react';
import axios from 'axios';

const AddWord = ({ setNewWord }) => {
  const [newName, setNewName] = useState('');
  const [newDefinition, setNewDefinition] = useState('');

  const handleChangeName = (e) => {setNewName(e.target.value)};
  const handleChangeDefinition = (e) => {setNewDefinition(e.target.value)};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('./words', {
      name: newName,
      definition: newDefinition
    })
    .then((res) => {
      setNewWord({
        name: newName,
        definition: newDefinition
      });
      setNewName('');
      setNewDefinition('');
      console.log(res.data);
    })
    .catch((err) => {
      console.log('Error adding new word: ', err);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={newName} placeholder='word' onChange={handleChangeName}/>
      <input type='text' value={newDefinition} placeholder='definition' onChange={handleChangeDefinition}/>
      <button>Add Word</button>
    </form>
  )
};
export default AddWord;