"use client"


import React,{useState,useEffect} from 'react'

import {  onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from '@/components/firebase/firebase';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import * as faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(225, 148, 111)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ]
};

export const Page = () => {

  const [data1, setData] = React.useState({});

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3000/api/wool/prices').then(response => response.json()).then(json => setData(()=>json));
      // data1[0]

    }
    fetchData();
  },[]);
  console.log(Object(data1[0])['Jan'])
  onAuthStateChanged(auth, (user) => {
    if (user) {

    }
    else{
        router.push('/login')
    }
});
 
  return (
  <>
   <Line options={options} data={data} />;
   {/* <button onClick={signout}>SignOut</button>  */}
  </>
  )
}
export default Page;