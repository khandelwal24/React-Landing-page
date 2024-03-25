import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState } from 'react'


import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


function Navbar() {
let [Nav, setNav] = useState(false);

  return (
    <div className='text-white bg-black flex justify-between items-center mx-auto max-w-[1360px] px-4 h-16 sticky z-[100] top-0 shadow-lg shadow-green-500'>
      <h1 className='w-full text-3xl font-bold text-[#00da9f]'>REACT.</h1>
      <ul className='hidden md:block'>
        <a href='#home' className='p-4 hover:font-thin hover:border-b-2'>Home</a>
        <a href='#About' className='p-4 hover:font-thin hover:border-b-2'>About</a>
        <a href='#Company' className='p-4 hover:font-thin hover:border-b-2'>Company</a>
        <a href='#Resources' className='p-4 hover:font-thin hover:border-b-2'>Resources</a>
        <a href='#Contact' className='p-4 hover:font-thin hover:border-b-2'>Conatct</a>
      </ul>

      <div onClick={()=>setNav(!Nav)} className='md:hidden'>
      {!Nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
      </div>

<div className={Nav ? 'fixed left-0 top-0 w-[45%] h-full bg-[#000300] rounded-e-xl ease-in-out duration-500': 'fixed left-[-100%]'}>
<h1 className='w-full text-3xl font-bold text-[#00da9f] p-4'>REACT.</h1>
    <ul className='flex flex-col pt-12 uppercase'>
        <a href='#home' className='p-4 border-b-[1px] border-gray-700 hover:bg-gray-700'>Home</a>
        <a href='#About' className='p-4 border-b-[1px] border-gray-700 hover:bg-gray-700'>About</a>
        <a href='#Company' className='p-4 border-b-[1px] border-gray-700 hover:bg-gray-700'>Company</a>
        <a href='#Resources' className='p-4 border-b-[1px] border-gray-700 hover:bg-gray-700'>Resources</a>
        <a href='#Contact' className='p-4 border-b-[1px] border-gray-700 hover:bg-gray-700'>Conatct</a>
    </ul>
</div>
      </div>
  )
}

export default Navbar
