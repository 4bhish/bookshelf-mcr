import React, { useContext, useState } from 'react';
import { BookProvider } from '../Contexts/BookContext';
import BookCard from '../components/BookCard';

function Home() {
    const {books,dispatch} = useContext(BookProvider)
    const [selectedId,setSelectedId] = useState(null)

    const currentReadings = books.filter((book) => book.status === 'Currently Reading')

    const wantToReadings = books.filter(book => book.status === 'Want to Read')

    
   
    function getIdClick(id){
        setSelectedId(id)
    }
    
  return (
    <div className='home'>
        
        <div className="reading-section">
            <h3 className="heading">Currently Reading</h3>
            <div className="book-list">
                {
                    currentReadings.map(book => <BookCard key={book.id} book={book} getIdClick={getIdClick} selectedId={selectedId} dispatch={dispatch} /> )
                }
            </div>
        </div>
        <div className="reading-section">
            <h3 className="heading">Want To Read</h3>
            <div className="book-list">
                {
                    wantToReadings.map(book => <BookCard key={book.id} book={book} getIdClick={getIdClick} selectedId={selectedId} dispatch={dispatch} /> )
                }
            </div>
        </div>
    </div>
  );
}

export default Home;
