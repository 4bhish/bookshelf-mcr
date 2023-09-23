import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BookContext from './Contexts/BookContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <BookContext>
      <App />
    </BookContext>
    </BrowserRouter>
  </React.StrictMode>,
)
