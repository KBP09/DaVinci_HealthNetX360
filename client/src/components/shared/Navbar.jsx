import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='z-50 flex h-[70px] bg-white items-center justify-between px-8 fixed top-0 w-full border-b-2 border-slate-300'>
      <div>
        <img className='h-[30px]' src="/logo.png" alt="" />
      </div>
      <div className='flex gap-2 items-center'>
        <ul className='flex gap-12 mr-4'>
          <Link to='/'><li className='cursor-pointer hover:text-blue-500'>Home</li></Link>
          <Link to='/about'><li className='cursor-pointer hover:text-blue-500'>About Us</li></Link>
          <Link to='/contact'><li className='cursor-pointer hover:text-blue-500'>Contact Us</li></Link>
        </ul>
        <span className='h-10 w-10 rounded-full bg-zinc-200 p-2  cursor-pointer flex'><img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=000000" alt="" /></span>
        <span className='h-10 w-10 rounded-full bg-zinc-200 p-2  cursor-pointer flex'><img src="https://img.icons8.com/?size=100&id=TfBuMnTzwL0v&format=png&color=000000" alt="" /></span>
        <span className='h-10 w-10 rounded-full bg-zinc-200 ml-4 cursor-pointer  flex'><img src="https://i.ibb.co/8K5WJMZ/demo-pfp.png" alt="" /></span>
      </div>
    </div>
  )
}

export default Navbar
