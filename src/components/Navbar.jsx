import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between bg-gradient-to-r from-purple-600 to-violet-700 text-white items-center py-4 px-8 shadow-lgss'>
        <div className='logo'>
            <span className='font-extrabold text-2xl tracking-wide drop-shadow-lg'>LISTIFY</span>
        </div>
        <ul className='flex gap-8 item-center'>
            <li className='cursor-pointer hover:font-extrabold hover:underline underline-offset-4 transition-all duration-900 '>Home</li>
            <li className='cursor-pointer hover:font-extrabold hover:underline underline-offset-4 transition-all duration-900'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
