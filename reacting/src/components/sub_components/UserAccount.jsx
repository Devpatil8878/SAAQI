import React, { useState } from 'react'
import Profile from '../Profile'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function UserAccount({isDarkMode}) {

    const ar = [
        {
            username: "John Doe",
            image: "https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            about: "UI/UX designer",
            friend: false
          },
          {
            username: "Alex Smith",
            image: "https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            about: "DevOps Engineer",
            friend: false
          },
          {
            username: "Saul goodman",
            image: "https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            about: "Backend Engineer",
            friend: false
          },
    ]

    useGSAP(()=>{
      gsap.from(".friends-animation", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        delay:1
      })
    })


  return (
    <>
        {ar.map((elem, index)=>{

            // const [isFriend, setIsFriend] = useState(false);

            // const handleOnClickFriend = () => {
            //   elem.friend =  !elem.friend;
            // }



            return <div className={`${isDarkMode ? "dark-mode-component-bg" : "light-mode-component-bg"} friends-animation users w-[80%] h-24 rounded `}>
                <div className="flex">
                    <div className="profile">
                        <button className='w-12 h-12 flex justify-center items-center rounded-full m-5 ml-8 mr-3 min-w-12'>
                            <img className="object-cover overflow-hidden w-full h-full rounded-full" src={elem.image} />    
                        </button>
                    </div>
                    <div className="flex-col">
                        <h1 className='text-semibold mt-3'>{elem.username}</h1>
                        <h4 className='text-xs'>{elem.about}</h4>
                        <button className='w-16 h-6 mt-2 rounded text-[10px] global-theme-color text-white'>{`${elem.friend ? "Remove friend" : "Add friend"}`}</button>
                    </div>
                </div>
            </div>
        })}

     
        
    </>
  )
}

export default UserAccount