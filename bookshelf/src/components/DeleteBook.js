import OutputBox from './OutputBox';
import {getBooks} from '../database/BookDirectory';

function DeleteBook(){
    return (
        <div>
            <h1>Delete Book Page!</h1>
            <OutputBox listOfBooks={getBooks()}/>
        </div>
    );
}

export default DeleteBook;