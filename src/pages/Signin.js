import React, { useState } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

let list = ["email", "password"];

const SignIn = () => {
  const router = useRouter()
  let [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault()
   let status =  await signIn("credentials",{
      email : userInfo.email,
      password : userInfo.password,
      redirect : false,
      callbackUrl : "/"
 
    })

    if(status.ok){
      router.push("/")
    }else{
      window.alert(status.error)
    }

  };


  const handleGoogleLogin = ()=>{
    signIn("google",{callbackUrl : "http://localhost:3000"})
  }
  return (
    <div className="w-full">
      <div className="px-96 mx-auto mt-10">
        <div>
          <p className="text-6xl text-center border-b-2 pb-7">SignIn</p>
          <div className="justify-center items-center text-center">
            <form>
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
              disabled={!userInfo.email && !userInfo.password}
              type="Submit"
            >
              SignIn
            </button>

           
            </form>
            <button type="button" className="bg-gray-400 text-xl p-3 mt-3 block mx-auto" onClick={handleGoogleLogin}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
