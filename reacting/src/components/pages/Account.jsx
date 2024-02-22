import React from 'react'


const info = {
    username: "devpatil8878",
    name: "Dev Patil",
    about: "Kya dekhna hai idhar...",
    dp: "https://images.unsplash.com/photo-1704186776780-19672ed2019a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    posts: 3,
    followers: 2885,
    followings: 150
}



function Account() {
  return (
    <>
        <div className="main flex gap-32 dark-mode-bg w-full h-[100vh] p-32 pl-[30rem]">
            <div className="profile w-[10rem] h-[10rem] overflow-hidden rounded-full">
                <img src={info.dp} alt="" />
            </div>
            <div className="information w-[20rem] h-[8rem] justify-start">
                <div className='flex gap-8'>
                    <h1 className="text-2xl">{info.username}</h1>
                    <button>Edit Profile</button>
                </div>

                <div className='flex gap-7'>
                    <h1>{info.posts}</h1> <span className='ml-[-7%]'>posts</span>
                    <h1>{info.followers}</h1> <span className='ml-[-7%]'>followers</span>
                    <h1>{info.followings}</h1> <span className='ml-[-7%]'>followings</span>
                </div>

                <h1 className='mt-4 font-semibold'>{info.name}</h1>
                <h1 className='font-thin'>{info.about}</h1>
            </div>
        </div>
    
    </>
  )
}

export default Account