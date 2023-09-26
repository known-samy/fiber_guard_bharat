import React, { useContext } from 'react'
import { Logo } from '../Icons/Logo'
import { Button } from '../button/button'
import { Menu ,Close} from '../Icons/system'
import { usePathname } from 'next/navigation'
import { UserContext } from '../firebase/userProvider'

export const LeftNavigation = ({open,toggle}) => {
  const pathname = usePathname()
  const user =useContext(UserContext);
  console.log(user)

  var classes = `flex flex-col bg-neutral-950 h-screen w-72 absolute top-0 ${open==true?'left-0':'left-[-100%]'} sm:hidden transition-all`
  return (
    <div className={classes}>
        <div className='flex items-center justify-start gap-3 px-4 py-4 w-full'>
            <div onClick={toggle}  className='flex items-center justify-start sm:hidden '><Menu/></div>
            <Logo />
        </div>
        <div className="options">
        {pathname!="/login" && <div className='flex flex-col items-start w-full  space-y-5 px-5 mt-10'>            
                <Button title='Market & News' active={pathname=='/'?true:false} url='/' />
                <Button title='Education' active={pathname=='/education'?true:false} url='/education' />                
                <Button title='Dashboard' active={pathname=='/dashboard'?true:false} url='/dashboard' />                
        </div>}
        </div>
    </div>
  )
}
