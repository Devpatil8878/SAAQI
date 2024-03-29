import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";



function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        navigate("/login");
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[100vh]">
        <div className="flex items-center justify-center temp-bg h-[100vh] ">
          <div className="back h-full w-[100%]">
            <div className="h-10 w-[50%] flex  justify-between text-white ">
              <div className="logo h-10 w-10 rounded-full ml-32 mt-9 bg-[url(../../../public/saaqi-bro.png)] object-cover ">
                <h1 className="ml-14 text-2xl font-bold">
                  SAAQI
                </h1>
              </div>
              <div className="flex gap-20 mr-8 mt-10 ">
                <a
                  src=""
                  href=""
                  className="text-slate-400 hover:text-purple-700 "
                >
                  Home
                </a>
                <a
                  src=""
                  href=""
                  className="text-slate-400 hover:text-purple-700"
                >
                  Join
                </a>
              </div>
            </div>
            <div className="box flex flex-col items-center h-[85vh] w-[40vw] rounded-xl mt-[50px] ml-40 text-white">
              <div className="dets mt-[9%]  w-[90%] h-[70%] flex flex-col justify-center ">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-center items-center gap-5 text-white  ">
                    <h1 className=" ml-[-1rem] mt-[5rem] font-semibold">
                      <h2 className="text-[13px] text-gray-400 ] ">
                        STEP INTO THE WORLD OF CONFESSIONS
                      </h2>
                      <h1 className="w-50% text-[45px]  ">
                        Create New Account
                      </h1>
                      <h3 className="text-[14px] flex">
                        Already have an Account?
                        <a
                          src=""
                          href="http://localhost:5173/login"
                          className="text-purple-700 font-semibold ml-2"
                        >
                          Log In
                        </a>
                      </h3>
                    </h1>
                    <div className="gap-5 flex mr-10 mb-[-9px] ml-[-0.5rem] ">
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        id="name"
                        placeholder="Full Name"
                        className="first w-[42%] h-9 pl-5 font-[14px] text-[14px]  focus:outline-none placeholder-gray-200 bg-slate-800 rounded-xl"
                      />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        id="uname"
                        placeholder="UserName"
                        className="last w-[39%] h-9 p-4 pl-5 text-[14px] focus:outline-none placeholder-gray-200 bg-slate-800 rounded-xl"
                      />
                    </div>
                    <div className="gap-5 flex-col ml-14 ">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Email"
                        className="email w-[69%] h-9 text-[14px] mb-[0.8rem]  pl-6 mr-28 focus:outline-none placeholder-gray-200 bg-slate-800 rounded-xl "
                      />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Password"
                        className="password w-[69%] h-9 text-[14px] pl-6  mb-[0.8rem] focus:outline-none placeholder-gray-200 bg-slate-800 rounded-xl"
                      />
                      <input
                        type="password"
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        id="password"
                        placeholder="Confirm Password"
                        className="password w-[69%] h-9 text-[14px] pl-6 mr-28  focus:outline-none placeholder-gray-200 bg-slate-800 rounded-xl"
                      />
                    </div>
                    <div className="flex w-full mt-[-20px] ml-28 gap-6">
                      <input
                        type="submit"
                        value="Change Method"
                        className="method w-[30%] h-9 p-2 mt-7 bg-purple-900 text-white rounded-full text-[13px] font-semibold"
                      />
                      <input
                        type="submit"
                        value="Next"
                        className="next w-[30%] h-9 p-2 mt-7 bg-purple-900 text-white rounded-full text-[13px] font-semibold "
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
