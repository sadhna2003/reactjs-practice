"use client";
import {createContext , useContext,useState} from "react";
import React from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
})=>{
    const [user , setUser] = useState(null);

    const login = ()=>{
        setUser({
            "name":"Test user",
            "email":"test@test.com"
        })
    }
    const logout = ()=>{
        setUser(null)
    }
    return (
       <AuthContext.Provider
       value= {{
         user,
         login,
         logout
       }}
       >
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};