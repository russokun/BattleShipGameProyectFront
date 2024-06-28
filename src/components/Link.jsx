import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({to , children}) => {
  return (
    <RouterLink to ={to} className='bg-[#088395] p-2 px-4 rounded-3xl text-primary-foreground font-bold hover:text-primary-foreground/80'>
        {children}
    </RouterLink>
  )
}

export default Link