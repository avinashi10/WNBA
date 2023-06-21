import React from 'react';
import WordItem from './WordItem.jsx';

const WordList = ({ list, userInput, setDeleteWord, setEditWord }) => {

  const filteredList = list.filter((word) => {
    if (userInput === '') {
      return word;
    } else if (word.name.toLowerCase().includes(userInput.toLowerCase())) {
      return word;
    }
  });

  return (
    <div>
      <h2>Words</h2>
      <table>
        {filteredList.map((word) => {
          return (
          <WordItem
            id = {word._id}
            name = {word.name}
            definition={word.definition}
            setDeleteWord={setDeleteWord}
            setEditWord={setEditWord}
          />
          );
        })}
      </table>
    </div>
  )
}

export default WordList;