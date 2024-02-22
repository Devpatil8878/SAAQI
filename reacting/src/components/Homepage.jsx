import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import Stories from '../components/Stories'
import Post from '../components/Post'
import Feed from '../components/Feed'
import Search from '../components/Search'
import UserAccount from '../components/sub_components/UserAccount'
import Settings from './menu_components/Settings'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Homepage({isDarkMode}) {

  useGSAP(()=>{
    gsap.from(".friends", {
      x:100,
      opacity:0,
      delay:1
    })
  })

  return (
  <>
  

    <div className={`dark-mode-bg w-[100%] flex flex-col no-scrollbar pl-32`}>
      <Stories/>
      <Post />
      <Feed />
    </div>

    <div className="friends right w-[22%] absolute right-0 glass-blue">
      <div className="search">
          <Search />
      </div>

      <div className="friends text-white">
        <div className="header flex items-center justify-between">
          <h1 className='ml-5 text-xl font-semibold'>Friends</h1>
            <Link to="/seemore">
                <div className="seemore flex items-center text-white">
                    <h4 className='text-sm pr-1'>See more</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </Link>

        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <UserAccount />
      </div>
      
    </div>


  
</>
  )
}

export default Homepage