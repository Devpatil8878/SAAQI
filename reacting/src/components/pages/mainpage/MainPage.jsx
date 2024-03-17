import React from "react";
import "../../../index.css";

function MainPage() {
  return (
    <>
      <div className="flex-col w-full text-white bg-zinc-900">
          <div className="temp">
        <div className="w-full h-screen flex-col">
          <div className="w-full h-20 justify-center items-center *">
            <nav className=" w-full h-12 pt-10 flex justify-center items-center gap-x-20    ">
              <a className="nav hover:opacity-50" href="Feed.jsx">
                Feed
              </a>
              <a className="nav hover:opacity-50" href="Post.jsx">
                Post
              </a>
              <i class=" ri-home-3-line"></i>
              <a className="nav hover:opacity-50" href="Search.jsx">
                About
              </a>
              <a className="nav hover:opacity-50" href="../login">
                Join
              </a>
            </nav>
          </div>
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className="text-[5rem] mt-[9rem] tracking-[0.25em] drop-shadow-sm text-center"
          >
            SAAQI
          </h1>
          <h4 className=" opacity-75 w-65 h-16 text-center text-[1.2rem] mt-[1.2rem]">
            A Social Media Web Application
          </h4>
          <h4 className=" w-full h-16 text-center text-[16px] mt-[4rem]">
            It's fast, secure and free.
          </h4>
          <div className="w-16 h-16  rounded-full cursor-pointer mt-12 overflow-hidden m-auto ">
            <img
              className="object-cover"
              src="../../../saaqi-bro.png"
              srcset=""
            />
          </div>
        </div>
        <div className="w-full h-screen text-white">
          <div className="text justify-center text-center mt-16">
            <h3 className="text-2xl uppercase pt-36 opacity-50"> Trending</h3>
            <h1 className="text-6xl pt-10">
              Explore things, nature and world.
            </h1>
            <h5 className="text-3xl pt-10 opacity-65 ">
              Social Access For Advanced Quality & Interaction
            </h5>
            <h2 className="text-4xl pt-24 opacity-90 capatilize">
              {" "}
              Explore Data
            </h2>
            <div className="data pt-[5rem] flex flex-row gap-10 items-center justify-center">
              <button className=" bluehai ml-5 rounded-full px-12 py-2">
                Users+
              </button>
              <button className="bluehai px-12 py-2 rounded-full">
                Posts+
              </button>
              <button className="bluehai px-12 py-2 rounded-full">
                People+
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
