import React from 'react'
import Profile from './Profile'

function Search() {
  return (
    <>
        <div className="searchbar flex mt-11 rounded text-white">
            <div className='search-icon ml-5 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" placeholder='Search something' className=' ml-3 w-32 bg-transparent outline outline-0 ' />
            </div>
            <Profile />
        </div>
    </>
  )
}

export default Search