/* eslint-disable @next/next/no-img-element */
"use client"

import {useEffect, useState} from 'react'
import Navigation from '@/components/navigation/Navigation'
import { auth } from '@/components/firebase/firebase';
import { onAuthStateChanged,signOut} from "firebase/auth";
import { useRouter } from 'next/navigation'
import { data } from './data';




export default function Home() {

  const router = useRouter()
  const [news,setNews]= useState();


  // useEffect(() => {
  //   (async () => {
  //     await fetch('http://localhost:3000/api/wool/news ')
  //     .then(response=>response.json())
  //     .then(json=> setNews(json))
  //   })();
  // }, []);

  console.log(data)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {      
        const uid = user.uid;
        // console.log(uid)
      } else {
        // router.push('/login', undefined, { shallow: true })
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
      <div className="main-body p-3 max-sm:space-y-3 sm:flex sm:gap-x-3 ">
        <div className="price w-full bg-emerald-200 h-9 border-2 rounded-sm border-neutral-600"></div>
        <div className="news w-ful rounded-sm">
          <NewsCard item={data[0]}/>
        </div>
      </div>
    {/* <h1>Home</h1>
    <button onClick={signout}>SignOut</button> */}
    </>
  )
}


function NewsCard({item}){
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${item.urlToImage})`}} title="Woman holding a mug">
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <div className="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div className="flex items-center">

      </div>
    </div>
  </div>
  )
}