import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../Styles/Navbar.css'; 

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-brand">
          <NavLink to={'/'} className="navbar-link">Bookshelf</NavLink>
        </h1>
        <nav className="navbar-menu">
          <NavLink to={'/search'} className="navbar-link">
            <SearchOutlinedIcon className="search-icon" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
