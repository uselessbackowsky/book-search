import React, { useState } from 'react';
import Header from './component/Header';
import './App.css';
import Booklist from './component/Booklist';
import SearchResoult from './component/SearchResoult';
import SearchFilter from './component/SeacrhFilter';

function App() {
  const [books,setBooks] = useState([])
  const [select, setSelect] = useState('all')

  function hendlerBooks(booksEl) {
    console.log(booksEl)
    setBooks ({books: [...booksEl]})
  }
  function hendlerSelect(select) {
    setSelect(select)
  }
  return (
    <div className="App">
      <Header onChange={hendlerBooks}/>
      <SearchFilter onChange = {hendlerSelect}/>
      <SearchResoult books ={books.books}/>
      <Booklist books={books} select={select }/>
    </div>
  );
}

export default App;
