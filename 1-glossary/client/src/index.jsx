import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from 'axios';
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import AddWord from './components/AddWord.jsx';

//create App component here
var App = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [newWord, setNewWord] = useState({});
  const [deleteWord, setDeleteWord] = useState({});
  const [editWord, setEditWord] = useState({});

  useEffect(() => {
    axios.get('./words')
    .then(({data}) => setList(data))
    .catch((err) => console.log('UH-OH axios get err: ' + err))
  }, [newWord, deleteWord, editWord])

  return(
    <div>
      <h1>Glossary</h1>
      <Search setUserInput={setUserInput} />
      <AddWord setNewWord={setNewWord} />
      <WordList
        list={list}
        userInput={userInput}
        setDeleteWord={setDeleteWord}
        setEditWord={setEditWord}
      />
    </div>
  );
};
render(<App />, document.getElementById('root'));
