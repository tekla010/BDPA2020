import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GetBooks from './components/GetBooks';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

ReactDOM.render(
    <div>
        <BrowserRouter>

        <div>
                <NavLink exact to="/">Homepage</NavLink>
                <NavLink to="/GetBooks">Get the list of Books</NavLink>
                <NavLink to="/AddBook">Add a Book</NavLink>
                <NavLink to="/UpdateBook">Update a Book</NavLink>
                <NavLink to="/DeleteBook">Delete a Book</NavLink>

            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/GetBooks" component={GetBooks} />
                <Route path="/AddBook" component={AddBook} />
                <Route path="/UpdateBook" component={UpdateBook} />
                <Route path="/DeleteBook" component={DeleteBook} />
            </Switch>

        </div>

            
        </BrowserRouter>
        
    </div>
  ,
    document.getElementById('root')
);