import OutputBox from './OutputBox';
import {getBooks} from '../database/BookDirectory';

function UpdateBook(){
    return (
        <div>
            <h1>Update Book Page!</h1>
            <OutputBox listOfBooks={getBooks()} />
        </div>
    );
}

export default UpdateBook;