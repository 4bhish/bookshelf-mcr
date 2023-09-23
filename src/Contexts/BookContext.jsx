import React, { createContext, useReducer } from 'react';
import { BooksDB } from '../data/BooksDB';

export const BookProvider = createContext()

function BookContext({children}) {
    function bookReducer(books,action) {
      switch(action.type){
        case 'add-to-currently-reading' : 
        return books.map(book => book.id === action.payload ? {...book,status:'Currently Reading'} : book)
        case 'add-to-want-to-read' : 
        return books.map(book => book.id === action.payload ? {...book,status:'Want to Read'} : book)
        case 'add-to-read' : 
        return books.map(book => book.id === action.payload ? {...book,status:'Read'} : book)
        default :
        return books
      }
    }

    const [books,dispatch] = useReducer(bookReducer,BooksDB)

  return (
    <BookProvider.Provider value={{books,dispatch}}>
        {children}
    </BookProvider.Provider>
  );
}

export default BookContext;
