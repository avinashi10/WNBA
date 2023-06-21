import React, { useState } from 'react';
import axios from 'axios';

const WordItem = ({id, name, definition, setDeleteWord, setEditWord}) => {

  const handleDeleteClick = (e) => {
    axios.delete('./words',{data: {name: name}})
    .then((res) => {
      setDeleteWord({name: name});
      console.log(res.data);
    })
    .catch((err) => {
      console.log('Error deleting word: ', err);
    })
  };

  var editedWord = {name: name, definition: definition, newName: '', newDefinition: ''};
  const handleEditClick = () => {
    editedWord.newName = prompt('Edited word:');
    editedWord.newDefinition = prompt('Edited definition:');
    console.log(editedWord)
    axios.put('./words', editedWord)
    .then((res) => {
      setEditWord(editedWord);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <tbody>
      <tr key={id}>
        <td>Word: {name}</td>
      </tr>
      <tr>
        <td>Definition: {definition}</td>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </tr>
    </tbody>
  )
};

export default WordItem;