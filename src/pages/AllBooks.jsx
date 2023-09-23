import React, { useContext, useState } from 'react';
import { BookProvider } from '../Contexts/BookContext';
import BookCard from '../components/BookCard';

function AllBooks() {
  const [userSearch,setUserSearch] = useState('')
  const [selectedId,setSelectedId] = useState(null)

  const{books,dispatch} = useContext(BookProvider)

  const filterBySearch = books.filter(book => book.category.toLowerCase().includes(userSearch.toLowerCase()))

   function getIdClick(id){
        setSelectedId(id)
    }

  return (
    <div className='all-books'>
      <div className="search-container">
        <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
      </div>
      <div className="book-list">
        {
          filterBySearch.map(book => <BookCard  book={book} dispatch={dispatch} selectedId={selectedId} getIdClick={getIdClick}  />)
        }
      </div>
    </div>
  );
}

export default AllBooks;
