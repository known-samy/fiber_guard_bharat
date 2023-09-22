import Link from 'next/link'
import React from 'react'

export const Button = ({...props}) => {

  let classes = `px-6 py-2 ${props.active?'bg-[#E1946F]':'text-white'} rounded-full hover:bg-[#E1946F] hover:text-black font-bold transition-all`
  return (
    <Link href={props?.url} className={classes} >{props?.title}</Link>
  )
}
