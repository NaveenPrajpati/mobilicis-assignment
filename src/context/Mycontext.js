"use client"
import React, { createContext, useState } from 'react'
export const Context=createContext()
export default function Mycontext({children}) {
const [userData,setUserData]=useState()
const[isLogin,setIsLogin]=useState(false)

    const values={
        userData,setUserData,isLogin,setIsLogin
    }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}
