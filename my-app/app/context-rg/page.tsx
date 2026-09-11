"use client";
import React from "react";
import {useAuth} from "@/context/AuthContext";
const ContextExample = () => {
    const {user , login , logout } = useAuth();
    return (
        <section>
            {user ? (
             <>
    <h1>user name : {user.name}</h1>
    <button
      type="button"
      className="w-20 px-3 py-1.5 bg-blue-500 cursor-pointer"
      onClick={logout}
    >
      Logout
    </button>
  </>
            ):(
                <>
               <h1>No user logged in</h1>
              <button
                 type="button"
               className="w-20 px-3 py-1.5 bg-blue-500 cursor-pointer"
               onClick={login}
               >
                login
            </button>
            </>
            )}
        </section>
    )

}
export default ContextExample;