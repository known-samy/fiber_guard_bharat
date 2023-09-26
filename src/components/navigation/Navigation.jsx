"use client"

import React from 'react'
import { TopNavigation } from './TopNavigation';
import { LeftNavigation } from './LeftNavigation';


export const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);
    return (
     <>
        <TopNavigation toggle={toggle} />
        <LeftNavigation open={open} toggle={toggle}/>
     </>

    )
}

export default Navigation;