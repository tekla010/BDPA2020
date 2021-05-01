import OutputBox from './OutputBox';
import {getBooks, addBook} from '../database/BookDirectory';
import {useState} from 'react';

function AddBook(){
    const [outputText, setOutputText] = useState();
    const [newBook, setNewBook] = useState({title: '', author: ''}); //newBook = {title: '', author: ''}

    return (
        <div>
            <h1>Add a Book Page!</h1>

            <button onClick={addNewBook(newBook, setOutputText)}> Post a new book</button>
            <input onChange={event => setNewBook({...newBook, title: event.target.value})} type="text" placeholder="Enter title name"></input>
            <input onChange={event => setNewBook({...newBook, author: event.target.value})} type="text" placeholder="Enter author name"></input>
            
            <OutputBox 
            listOfBooks={outputText} 
            />

        </div>
    );
}

function addNewBook(newBook, setOutputText){
    return () => {
        // add new book to the book directory
        addBook(newBook)
        .then(response => {setOutputText([response.data])});
        // have the output book display new book
    };
}
export default AddBook;