import React, { useContext, useState} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Settings from '../menu_components/Settings'
import Account from './Account'


function LoggedIn() {

  let [isDarkMode, setIsDarkMode] = useState(true);

    const switchChanged = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    }


  return (
    <>
      <div className={`${isDarkMode ? "dark-mode-bg" : "light-mode-bg"}flex w-full justify-between`}>
        <Navbar />

        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route exact path='/settings' element={<Settings switchChange={switchChanged} isDark={isDarkMode} />} />
            <Route path='/account' element={<Account />} />
        </Routes>

      </div>
      
    </>
  )
}

export default LoggedIn