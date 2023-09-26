"use client"


import React,{useState,useEffect} from 'react'

import {  onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from '@/components/firebase/firebase';
// import React, { Component } from "react";
// import Chart from "react-apexcharts";


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];



export const LineChart = () => {

  const [data1, setData] = React.useState({});
  const [chartdata,setChartData] = useState({ options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: labels
    }
  },
  series: [
    {
      name: "Price ",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
});


//   console.log(Object(data1[0])['Jan'])
  onAuthStateChanged(auth, (user) => {
    if (user) {

    }
    else{
        router.push('/login')
    }
});
 
  return (
  <>
  {/* <Chart
              options={chartdata.options}
              series={chartdata.series}
              type="line"
              width="100%"
            /> */}
   {/* <button onClick={signOut}>SignOut</button>  */}
  </>
  )
}
export default LineChart;