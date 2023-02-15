import React, { useState } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"



let list = ["name", "email", "password"];

const Signup = () => {
  let [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    await axios
      .post("/api/user/signUp", userInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  const handleGoogleLogin = ()=>{
    signIn("google",{callbackUrl : "http://localhost:3000"})
  }
  return (
    <div className="w-full">
      <div className="px-96 mx-auto mt-10">
        <div>
          <p className="text-6xl text-center border-b-2 pb-7">Signup</p>
          <div className="justify-center items-center text-center">
            {list?.map((item) => {
              return (
                <input
                  onChange={handleChange}
                  key={item}
                  type={item == "password" ? "password" : "text"}
                  name={item}
                  className="ring-2 w-[550px] mx-auto block mt-5 font-2xl p-4"
                  placeholder={`Enter Your ${item}`}
                />
              );
            })}

            <button
              onClick={handleSubmit}
              className="text-2xl text-white  bg-purple-800 p-3 mt-5"
              disabled={!userInfo.name && !userInfo.email && !userInfo.password}
              type="submit"
            >
              Signup
            </button>

            <button type="button" className="bg-gray-400 text-xl p-3 mt-3 block mx-auto" onClick={handleGoogleLogin}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
