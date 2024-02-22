import React, { useState} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
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

  let [isLoggedIn, setIsLoggedIn] = useState(true);
  


  return (
    <>
      <div className='flex w-full justify-between'>
        
        {isLoggedIn ? <LoggedIn/> : <Routes>
          <Route path='/register' Component={Register} />
          <Route path='/' Component={Login} />
        </Routes>}
          


        
        

       


      </div>
      
    </>
  )
}

export default App