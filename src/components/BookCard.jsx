import '../Styles/BookCard.css'

import React  from 'react';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function BookCard({book,selectedId,getIdClick,dispatch}) {
    

  return (
    <div className='book-card'>
        {
        selectedId === book.id &&
         <div className='dropdown-content'>
            <button onClick={() => dispatch({type:'add-to-currently-reading',payload:book.id})}>Move to Currently Read</button>
            <button onClick={() => dispatch({type:'add-to-want-to-read',payload:book.id})}>Move to Want To Read</button>
            <button onClick={() => dispatch({type:'add-to-read',payload:book.id})}>Read</button>
        </div>
      }

     <div onClick={() => getIdClick(book.id)} className="action-click">
        <MoreVertOutlinedIcon />
      </div>
      <img src={book.imgURL} alt={book.title}  />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      
    </div>
  );
}

export default BookCard;
