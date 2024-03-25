import React from 'react'
import R from '../assets/9807444.jpg';

function Cards() {
  return (
    <div className='w-full py-10 bg-white px-4'>
    <div className='max-w-[1024px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>

    <div className='card1 rounded-lg hover:scale-105 duration-300 bg-gray-300 shadow-xl w-full flex flex-col items-center justify-center p-4 gap-3'>
    <img src={R} className='w-[100px] rounded-full'/>
    <h2 className='text-2xl font-bold'>Single User</h2>
    <p className='text-xl font-extrabold'>$149</p>
    <div className='text-lg font-serif'>
        <p className='border-b-[1px] border-gray-500'>500GB Storage</p>
        <p className='border-b-[1px] border-gray-500'>1 Garanted User</p>
        <p className='border-b-[1px] border-gray-500'>Send upto 2GB</p>
    </div>
    <button className='bg-green-500 px-5 py-2.5 text-center font-semibold rounded-lg hover:bg-green-600 duration-200'>Get Started</button>
    </div>
    <div className='card1 rounded-lg hover:scale-105 duration-300 bg-gray-300 shadow-xl w-full flex flex-col items-center justify-center p-4 gap-3'>
    <img src={R} className='w-[100px] rounded-full'/>
    <h2 className='text-2xl font-bold'>Single User</h2>
    <p className='text-xl font-extrabold'>$149</p>
    <div className='text-lg font-serif'>
        <p className='border-b-[1px] border-gray-500'>500GB Storage</p>
        <p className='border-b-[1px] border-gray-500'>1 Garanted User</p>
        <p className='border-b-[1px] border-gray-500'>Send upto 2GB</p>
    </div>
    <button className='bg-green-500 px-5 py-2.5 text-center font-semibold rounded-lg hover:bg-green-600 duration-200'>Get Started</button>
    </div>
    <div className='card1 rounded-lg hover:scale-105 duration-300 bg-gray-300 shadow-xl w-full flex flex-col items-center justify-center p-4 gap-3'>
    <img src={R} className='w-[100px] rounded-full'/>
    <h2 className='text-2xl font-bold'>Single User</h2>
    <p className='text-xl font-extrabold'>$149</p>
    <div className='text-lg font-serif'>
        <p className='border-b-[1px] border-gray-500'>500GB Storage</p>
        <p className='border-b-[1px] border-gray-500'>1 Garanted User</p>
        <p className='border-b-[1px] border-gray-500'>Send upto 2GB</p>
    </div>
    <button className='bg-green-500 px-5 py-2.5 text-center font-semibold rounded-lg hover:bg-green-600 duration-200'>Get Started</button>
    </div>

    </div>
      
    </div>
  )
}

export default Cards
