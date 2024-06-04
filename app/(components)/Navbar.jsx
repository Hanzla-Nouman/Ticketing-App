import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-nav p-4 flex justify-between'>
    <div className=' flex space-x-4'>
   
   <Link href="/"> <FontAwesomeIcon icon={faHome} className='text-lg h-7 icon text-default-text'/></Link>
   <Link href="/ticket-page/new"> <FontAwesomeIcon icon={faTicket} className='text-lg h-7  icon text-default-text'/></Link>
    </div>
    
    <>
    <p className='text-default-text'>Jake@gmail.com</p>
    </>
    </div>
  )
}

export default Navbar