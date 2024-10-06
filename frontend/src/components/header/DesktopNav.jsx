import React from 'react'
import {Link} from 'react-router-dom'

const DesktopNav = ({menuItems, Logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
        <img className='h-24' src={Logo} alt="Logo" /></a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu, index) => (
                    <li key={index}>
                        <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
                    </li>
                ))
            }
        </ul>

        {/* Login and Sign Up button*/}
        <ul className='flex items-center gap-3 font-medium'>
            <li>
                <button className='text-secondary px-4 py-2 rounded'> Log In</button>
            </li>
            <li>
                <button className='text-secondary px-4 py-2 rounded'> Sign Up</button>
            </li>
        </ul>
    </div>
  )
}

export default DesktopNav