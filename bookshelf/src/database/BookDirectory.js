import axios from 'axios';

var options = { baseURL: 'http://localhost:8080' };
var httpClient = axios.create(options);

function getBooks(){
    // call out to the api to get all books
    // http://localhost:8080/books - url
    // method: GET
    var response = httpClient.get(`/books`, options);
    return response;
}

function getBook(id){ //id = 1
    // call out to the api to get book with specific id
    // http://localhost:8080/books/4 - url
    // method: GET
    var response = httpClient.get(`/books/${id}`, options);
    // `/books/${id}`
    return response;
};

function addBook(book){
    // post a book to the api to create a new book
    // http://localhost:8080/books - url
    // method: POST
    // body = {id: 3, author: "me", title: "hello world"}
    var response = httpClient.post('/books', book, options);
    return response;
}

//export default books;

export {
    getBooks,
    getBook,
    addBook
};