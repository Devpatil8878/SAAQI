import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Stories from './components/Stories'
import Post from './components/Post'
import Feed from './components/Feed'
import Search from './components/Search'
import UserAccount from './components/sub_components/UserAccount'
import Homepage from './components/Homepage'
import Settings from '../src/components/menu_components/Settings'
import Register from './components/pages/Register'
import LoggedIn from './components/pages/LoggedIn'
import Login from './components/pages/Login'

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', JSON.stringify(status));
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn) {
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, []);
  

  return (
<>
      {console.log(isLoggedIn)}
      <div className="flex w-full justify-between">
      <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<LoggedIn />} />
              {/* Add other logged-in routes here */}
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login handleIsLoggedIn={handleIsLoggedIn} />} />
              <Route path="/" element={<Login handleIsLoggedIn={handleIsLoggedIn} />} />
            </>
          )}
        </Routes>
      </div>
</>
  )
}

export default App