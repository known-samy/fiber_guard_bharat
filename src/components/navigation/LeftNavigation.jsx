import React from 'react'
import { Logo } from '../Icons/Logo'
import { Button } from '../button/button'
import { Menu ,Close} from '../Icons/system'

export const LeftNavigation = ({open,toggle}) => {
  var classes = `flex flex-col bg-neutral-950 h-screen w-72 absolute top-0 ${open==true?'left-0':'left-[-100%]'} sm:hidden transition-all`
  return (
    <div className={classes}>
        <div className='flex items-center justify-start gap-3 px-4 py-4 w-full'>
            <div onClick={toggle}  className='flex items-center justify-start sm:hidden '><Menu/></div>
            <Logo />
        </div>

    </div>
  )
}
