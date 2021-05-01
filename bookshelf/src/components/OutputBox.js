function OutputBox(props){ 
    // props = {
   //     
   //  }
     return(
         <div className="output-border">
             <ul>
                {displayArray(props.listOfBooks)}
             </ul>
         </div>
     );
 }


 function displayArray(books){  
     // array of books  --> 
     // [ {id: 2, title: "book", author: "An Author"}, 
     // {id: 3, title: "cool", author: "sifora"} ]
    if(books == null || books == undefined) {
        return null;
    }
    else {

        let booksArray = []; 
        for(var i = 0; i < books.length; i++){ // i = 0, i= 1, i = 2
            booksArray.push(<li> {'ID: ' + books[i].id + ' ' + books[i].title + ' by ' + books[i].author} </li>);  // books[0] => {{ id: 1, title: "Name of the Wind", author: "I don't remember"}
        }
        
        return (
            booksArray
        );
    }
 }

 
 export default OutputBox;
 