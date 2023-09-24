"use client"

import {useEffect} from 'react'
import Navigation from '@/components/navigation/Navigation'
import { auth } from '@/components/firebase/firebase';
import { onAuthStateChanged,signOut} from "firebase/auth";
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {      
        const uid = user.uid;
        // console.log(uid)
      } else {
        router.push('/login', undefined, { shallow: true })
      }
    });
  })

  function signout(){    
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
  
  console.log(auth.currentUser)


  return (
    <>
    <Navigation/>
    <h1>Home</h1>
    <button onClick={signout}>SignOut</button>
    </>
  )
}
