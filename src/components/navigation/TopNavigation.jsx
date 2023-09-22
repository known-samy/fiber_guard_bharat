import React from 'react'
import { Logo } from '../Icons/Logo'
import { Button } from '../button/button'
import { Menu } from '../Icons/system'

export const TopNavigation = ({toggle}) => {
  return (
    <div className='w-full bg-neutral-950 px-3 py-2 flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
            <div onClick={toggle}  className='flex items-center justify-start sm:hidden '><Menu/></div>
            <Logo />
        </div>
        <div className='flex items-center justify-between space-x-2'>            
                <Button title='Login' active url='/login' />
                
        </div>
    </div>
  )
}
