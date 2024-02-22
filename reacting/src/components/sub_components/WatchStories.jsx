import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function WatchStories({user, image}) {


  return (
    <>
      <Link to={`/watchstory/${user}`}>
        <div className='transition-all bg-purple-400 w-16 h-16 flex justify-center items-center gradient-bg rounded-full m-5 mr-3 min-w-16'>
            <img className=' object-cover w-[90%] h-[90%] rounded-full ' src={`${image}`} />    
        </div>
      </Link>
    </>
  )
}

export default WatchStories