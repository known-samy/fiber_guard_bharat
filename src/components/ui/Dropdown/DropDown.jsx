import { motion, Variants } from "framer-motion";
import { useState, useEffect,createContext,useContext } from 'react'

export const DropDownContext = createContext(null)

export const DropDown = ({children,className}) => {

    const [open, setOpen] = useState(false)
    const toggle = ()=> setOpen(!open)    
    return (
      <DropDownContext.Provider value={open}>
        <motion.div 
          onClick={() => toggle()}
          className={`relative grow-0 ${className} `}
          initial={false}
          animate={open ? "open" : "closed"}
        >
          {children}    
        </motion.div>
      </DropDownContext.Provider>
    )
  }
export const DropItem = ({title,icon,action,className,animate=false}) => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };  
  return (
      <motion.div onClick={()=>action()} variants={animate ? itemVariants:{}} className={`text-lg w-full px-2 py-2 flex items-center gap-x-3 text-slate-100 hover:bg-zinc-800 rounded-md cursor-pointer ${className}`}>
        <div className='flex align-middle h-full'>{icon}</div>
        <div className='flex align-middle h-full'>{title}</div>
      </motion.div>
    )
}  
export const DropDownItems = ({children,className}) => {
    const open = useContext(DropDownContext)
    return (
      <>
      <motion.div 
            className={`absolute top-[120%] right-[0%] w-44 h-fit p-2 bg-zinc-900 rounded-md drop-shadow-2xl flex flex-col ${className}`}        
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(0% 0% 100% 100% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
          >
            {children}
          </motion.div>
    
      </>
    )
}
export const DropDownHeader = ({children,className,openClasses}) => {
    const open = useContext(DropDownContext)
    return (
      <motion.button
      initial={false}
      animate={open ? "open" : "closed"}
      whileTap={{ scale: 0.97 }}
      
      className={`${className}  p-3 gap-x-5 h-10 text-white m-0  w-fit flex justify-center items-center rounded-md border-2 hover:bg-zinc-900 ${open  ? (openClasses?openClasses:'border-zinc-700 bg-zinc-900 ') :'border-transparent'} `}
    >
        {children}
    </motion.button>
    )
}
export const HeaderTitle = ({children}) => {
     return (<>{children}</>)
}
export const HeaderIcon = ({children,rotate=false}) => {
    return (
        <motion.div
        variants={rotate?{
          open: { rotate: 180 },
          closed: { rotate: 0 }
        }:{}}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
      >
       {children}
        
      </motion.div>
    )
}