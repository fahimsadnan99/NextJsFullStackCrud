import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  let router = useRouter()

  
  const { data: session } = useSession();



  return (
    <div className="w-full bg-purple-900 shadow-lg shadow-black/25 py-2">
      <div className="flex justify-between px-10 mx-auto">
        <Link href="/" className="text-4xl  text-white font-semibold">
          Test Website
        </Link>
        <div className="flex gap-2 justify-center items-center">
          <Link
            href="/"
            className={`text-white font-semibold text-xl ml-2 p-2 rounded-lg ${router.pathname == "/" ? "bg-purple-400" : "bg-slate-700 "}`}
          >
            Home
          </Link>
          {!session ? (
            <>
              <Link
                href="/Signin"
                className={`text-white font-semibold text-xl ml-2 p-2 rounded-lg ${router.pathname == "/Signin" ? "bg-purple-400" : "bg-slate-700 "}`}
              >
                Signin
              </Link>
              <Link
                href="/Signup"
                className={`text-white font-semibold text-xl ml-2 p-2 rounded-lg ${router.pathname == "/Signup" ? "bg-purple-400" : "bg-slate-700 "}`}
              >
                Signup
              </Link>
            </>
          ) : null}
          {session?.user?.role == "admin" && (
            <Link
              href="/Dashboard"
              className={`text-white font-semibold text-xl ml-2 p-2 rounded-lg ${router.pathname == "/Dashboard" ? "bg-purple-400" : "bg-slate-700 "}`}
            >
              Dashboard
            </Link>
          )}
          <p
             className={`text-white font-semibold text-xl ml-2 p-2 rounded-lg  bg-slate-700 `}
            onClick={async () => await signOut()}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const getServerSideProps = async ({ req }) => {
  let session = await getSession();

  return {
    props: {
      data: session,
    },
  };
};
