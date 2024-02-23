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
    console.log(isDarkMode);

    let backColor = isDarkMode ? "dark-mode-bg" : "light-mode-bg"




  return (
    <>
      <div className={`flex w-full justify-between`}>
        <Navbar isDarkMode={isDarkMode}/>

        <Routes>
            <Route path='/' element={<Homepage isDarkMode={isDarkMode} backColor={backColor}/>} />
            <Route exact path='/settings' element={<Settings switchChange={switchChanged} bg={backColor} isDarkMode={isDarkMode} />} />
            <Route path='/account' element={<Account />} />
        </Routes>

      </div>
      
    </>
  )
}

export default LoggedIn