import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { NavLink } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import Navbar from './components/Navbar'

function App() {


  return (

    <>
     <Navbar />
      <div className="app-body">
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/search' element={<AllBooks />} />
      </Routes>
      </div>
    </>
  )
}

export default App
