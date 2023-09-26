/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState } from 'react'

const Page = () => {
  const [active,setActive]=useState(0);

  function handleActive(index){
    setActive(index)
  }

  return (
    <div className='flex p-2 gap-x-2'>     
      <Navigation activeIndex={active} activeChange={handleActive} />
      <ContentSection />

    </div>
  )
}
export default Page;



export const Navigation = ({activeIndex,activeChange}) => {
  const navTitle=["Wool","Types of Wool","Processing of Wool","Shearing","Scouring","Sorting","Combing","Dyeing","Spinning","Common Sheep Diseases","Methods to Increase Production","Government Schemes"]

  return (
    <div className='h-full w-64 shrink-0 p-3 space-y-2 bg-[#DEDEDE] rounded-md sticky top-0'>

      {
        navTitle.map((ele,index)=> <NavItem key={index} id={index} active={activeIndex==index?true:false} title={ele} activeChange={activeChange}/>)
      }

    </div>
  )
}
export function NavItem({active=false,title,id,activeChange}) {

  return (
    <div className={`w-full p-3  transition-all  hover:bg-orange-600 hover:text-white rounded-lg ${active?"bg-orange-600 text-white":""}`} onClick={()=>activeChange(id)}>
      {title}
    </div>
  )
}



 function ContentSection({title="Wool"}) {
  return (
    <div className='w-full border-2 border-orange-300 h-[calc(100vh - 100px)] rounded-md p-3'>
        <div className='font-extrabold text-3xl w-full px-3 '>{title}</div>
        <div className="image  mx-auto mt-5">
        <iframe width="560" className='mx-auto w-full rounded-md overflow-hidden' height="315" src="https://www.youtube.com/embed/YwRbyTCqOQY?si=JW_objFdy-FGDpno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <section className='w-full mt-5'>
        Wool is a natural fiber derived from the fleece of sheep and certain other animals, primarily goats (cashmere and mohair), rabbits (angora wool), and even some camel species. It is one of the oldest and most versatile textile materials known to humanity, with a rich history dating back thousands of years. Here's an explaining description of wool:

<br/><b>1. Natural and Sustainable:</b>
   - Wool is a renewable and sustainable resource. Sheep grow new fleece each year, making wool a natural and eco-friendly choice for textiles.

   <br/><b>2. Exceptional Insulation:</b>
   - Wool is renowned for its outstanding insulation properties. It has the ability to keep you warm in cold weather by trapping air within its fibers, providing excellent thermal regulation. It can also wick moisture away from the body, making it comfortable to wear in various conditions.

   <br/><b>3. Breathable and Moisture-Wicking:</b>
   - Wool fibers are incredibly breathable, allowing them to regulate body temperature by absorbing and releasing moisture. This feature makes wool an ideal choice for activewear and outdoor clothing.

   <br/><b>4. Durable and Resilient:</b>
   - Wool is known for its durability and resilience. It has natural elasticity, allowing it to retain its shape even after repeated stretching and bending. This makes wool garments long-lasting and resistant to wrinkles.

   <br/><b>5. Natural Fire Resistance:</b>
   - Wool is naturally fire-resistant, as it requires high levels of oxygen to ignite. When it does burn, it often self-extinguishes once the heat source is removed.

   <br/><b>6. Versatile:</b>
   - Wool is a versatile material used in various applications, including clothing, blankets, carpets, upholstery, and even industrial uses like insulation.

   <br/><b>7. Sustainable Farming:</b>
   - Sheep farming for wool encourages sustainable land management practices. Sheep graze on natural pastures, helping maintain ecosystems.

   <br/><b>8. Biodegradable:</b>
   - Wool is biodegradable and will naturally decompose without harming the environment.

   <br/><b>9. High-Quality Varieties:</b>
   - Different breeds of sheep produce wool with varying qualities, from fine merino wool, known for its softness, to coarser wools used for rugged applications.

   <br/><b>10. Low Maintenance:</b>
    - Wool is relatively low-maintenance. It has a natural resistance to stains and odors, and many wool garments can be worn several times without needing frequent washing.

    <br/>Wool's unique combination of warmth, breathability, and sustainability has made it a valuable resource in the textile industry. It continues to be a popular choice for a wide range of products, providing comfort and performance in diverse settings. Whether you're wearing a cozy wool sweater or enjoying the softness of a wool blanket, this natural fiber has a timeless appeal and remains a symbol of quality and comfort.
        </section>
    </div>
  )
}

