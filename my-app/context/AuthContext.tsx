"use client";
import { createContext, useContext, useState } from "react";
import React from "react";
type User = { name: string; email: string; }; 
type AuthContextType = {
   user: User | null; 
   login: () => void; 
   logout: () => void; 
  };
export const AuthContext = createContext<AuthContextType | undefined>( undefined );
export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      "name": "Test user",
      "email": "test@test.com"
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider
      value={{
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