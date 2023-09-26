/* eslint-disable @next/next/no-img-element */
"use client"

import {useEffect, useState,useContext,createContext} from 'react'
import Navigation from '@/components/navigation/Navigation'
import { auth } from '@/components/firebase/firebase';
import { onAuthStateChanged,signOut} from "firebase/auth";
import { useRouter } from 'next/navigation'
import { data } from './data';



import {OverviewIcon,DownloadIcon} from '@/components/Icons/Icons'
import LineChart from '@/components/chart/Line';




export default function Home() {

  const router = useRouter()
  const [prices,setPrices]= useState();


  useEffect(() => {
    (async () => {
      await fetch('http://localhost:3000/api/wool/prices/2003/2023 ')
      .then(response=>response.json())
      .then(json=> setPrices(json))
    })();
  }, []);

  if(prices!=undefined){

    console.log(prices["2021"])
  }

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
        <div className="price w-full sm:w-2/3 sm:sticky top-0 h-fit sm:h-screen border-2 rounded-lg border-neutral-200">
            <PriceSection/>
        </div>
        <div className="news w-full rounded-sm space-y-3">
          {data.map((item,index)=>{
            return <NewsCard key={index} item={item}/>
          })}
        </div>
      </div>
    {/* <h1>Home</h1>
    <button onClick={signout}>SignOut</button> */}
    </>
  )
}


function NewsCard({item}){
  return (

    <div className=" sm:flex bg-white border border-gray-200 rounded-lg shadow p-3 ">
      <a href="#" className='sm:inline-block rounded-lg sm:w-full '>
          {/* <img class="rounded-t-lg" src={`${item.urlToImage}`} alt="" /> */}
          <div className="h-48 sm:h-full w-full flex-none bg-cover rounded-lg text-center overflow-hidden" style={{backgroundImage: `url(${item.urlToImage})`}} title="Woman holding a mug"></div>
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 max-sm:text-lg text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
          </a>
          <p className="mb-3 max-sm:text-base font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
          <a href={item.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>

  )
}

function PriceSection(){
  var price = 4750;
  return (
      <div className='w-full p-2'>
          <div className="price-header flex items-center justify-between flex-wrap max-sm:gap-y-3">
            <div className='left flex gap-x-3 items-center'>
              <div className="icon bg-orange-500 rounded-full w-fit p-2"><OverviewIcon/></div>
              <span>Overview</span>
            </div>
            <div className='right flex items-center gap-x-5'>
              <div>
                <select name="graph" id="" className='p-2 bg-orange-400 text-white rounded-md'>
                  <option value="yearly">Yearly</option>
                  <option value="5year">5 year</option>
                  <option value="max">Max</option>
                </select>
              </div>
              <a className='p-2 px-3S bg-orange-500 text-white rounded-md flex items-center gap-x-3'>
                <DownloadIcon/>
                <span>Download Report</span>
              </a>
            </div>
          </div>

          <div className="pricedets mt-6 ml-2">
            <span className='font-bold text-3xl block'>Rs. {price}/Quintal</span>
            {/* <span>updated 2hrs ago</span> */}
          </div>
          <LineChart/>

          <div className="price-header flex items-center justify-between mt-5">
            <div className='left flex gap-x-3 items-center'>
              <div className="icon bg-orange-500 rounded-full w-fit p-2"><OverviewIcon/></div>
              <span>Stats</span>
            </div>
            
          </div>

          <div className="stats flex items-center justify-between px-5 mt-5 font-bold text-lg max-sm:text-sm">
            <span className=' '>Highest Price this year</span>
            <span className='text-green-700'>Rs. 4320 /Quintal</span>
          </div>
          <div className="stats flex items-center justify-between px-5 mt-5 font-bold text-lg max-sm:text-sm">
            <span className=' '>Lowest Price this year</span>
            <span className='text-red-700'>Rs. 3320/Quintal</span>
          </div>
          <div className="stats flex items-center justify-between px-5 mt-5 font-bold text-lg max-sm:text-sm">
            <span className=' '>Expected Prices Next Month</span>
            <span className=''>Rs. 2320/Quintal</span>
          </div>
      </div>

  )
}