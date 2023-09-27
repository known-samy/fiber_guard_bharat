"use client"


import React,{useState,useEffect,createContext} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/components/firebase/firebase';
import { useRouter } from 'next/navigation'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        }
    });

    return <UserContext.Provider value={currentUser}> {children} </UserContext.Provider>
}

export  default UserProvider;
