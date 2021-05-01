import '../styles/App.css'
import OutputBox from './OutputBox';
import { useState } from 'react';
import { getBooks, getBook } from '../database/BookDirectory'

  function GetBooks(){ // functional component
      const [outputText, setOutputText] = useState(); // outputText = null;
      const [bookId, setBookId] = useState(); // bookId = 33
    
    return ( //jsx
        <div> 
            <h1>Get Books!</h1>

            <button onClick={displayBooks(setOutputText)}> Get List of Books! </button>
            <button onClick={getBookById(bookId, setOutputText)} >Get Book by Id</button>
            <input onChange={event => setBookId(event.target.value)} type="text" placeholder="Enter book id"></input>

            <OutputBox listOfBooks={outputText} />
        </div>
    );
}

function displayBooks(setOutputText){
    return () => {
        getBooks()
        .then(bookResponse => {setOutputText(bookResponse.data)})
    }
}

function getBookById(bookId, setOutputText){
    return () => {
        getBook(bookId)
        .then(bookResponse => {setOutputText(bookResponse.data)})
    }
}

export default GetBooks;