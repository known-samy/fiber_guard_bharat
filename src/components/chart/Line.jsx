import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  {"month": "Jan", "price": 1323.67},
  {"month": "Feb", "price": 1321.57},
  {"month": "Mar", "price": 1365.67},
  {"month": "Apr", "price": 1425.76},
  {"month": "May", "price": 1485.86},
  {"month": "Jun", "price": 1545.96},
  {"month": "Jul", "price": 1606.05},
  {"month": "Aug", "price": 1666.15},
  {"month": "Sep", "price": 1726.25},
  {"month": "Oct", "price": 1786.34},
  {"month": "Nov", "price": 1846.44},
  {"month": "Dec", "price": 1906.54}
];



  const LineCh = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, [width]);

    return (
      <LineChart width={550} height={300}  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
    )
  }
  export default LineCh;