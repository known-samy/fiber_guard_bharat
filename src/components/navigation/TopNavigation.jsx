import React from 'react'
import { Logo } from '../Icons/Logo'
import { Button } from '../button/button'
import { Menu } from '../Icons/system'
import { usePathname } from 'next/navigation'

export const TopNavigation = ({toggle}) => {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <div className='w-full bg-neutral-950 px-3 py-2 flex items-center justify-between min-h-[60px]'>
        <div className='flex items-center justify-start gap-3'>
            <div onClick={toggle}  className='flex items-center justify-start sm:hidden '><Menu/></div>
            <Logo />
        </div>
        {pathname!="/login" && <div className='hidden sm:flex items-center justify-between space-x-2'>            
                <Button title='Market & News' active={pathname=='/'?true:false} url='/' />
                <Button title='Education' active={pathname=='/education'?true:false} url='/education' />                
                <Button title='Dashboard' active={pathname=='/dashboard'?true:false} url='/dashboard' />                
        </div>}
    </div>
  )
}
