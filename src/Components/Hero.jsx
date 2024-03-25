import React from 'react'
import { ReactTyped,Typed } from "react-typed";

function Hero() {
  return (

  
    <div className='text-center mx-auto max-w-[800px] px-4 flex flex-col justify-center item-center h-[100vh] leading-[1.5]'>
        <p className='text-green-500 font-bold text-3xl'> GROWING WITH DATA ANALYTICS</p>
        <h1 className='font-bold text-white sm:text-5xl text-4xl'>Grow with data</h1>
        <div className='flex flex-wrap justify-center item-center gap-1'>
        <p className='text-white sm:text-2xl text-xl font-semibold'>Fast, flexible & financing for</p>
        <ReactTyped className='text-white sm:text-2xl text-xl font-semibold'
        strings={['BTB','BTC','SASS','CTC']} 
        typeSpeed={100}
        backSpeed={120} 
        loop
         />
        </div>
        <p className=' font-semibold text-sm sm:text-xl text-gray-500'>Monitor your data Analytics to increase revenue for BTB, BTC & SASS platforms</p>
        <button className='text-center px-5 py-2.5 max-w-[1/4] mx-auto mt-3 rounded-lg bg-green-500 font-semibold hover:bg-green-600'>Get Started</button>
    </div>
  
  )
}

export default Hero
