import React from 'react'

import P from '../assets/PSP.jpg'

function Analytics() {
  return (
    <div className='w-full px-4 bg-red-50 py-16'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 justify-center'>
       <img src= {P} className='w-[400px]'/>
       <div className='max-w-[400px]'>
       <p className='text-green-400 font-bold text-xl'>DATA ANALYTICS DASHBOARD</p>
        <h2 className='text-2xl font-bold'>Manage data Analytics Centerally</h2>
        <p>npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part of the JavaScript community and helps support one of the largest developer ecosystems in the world.The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.</p>
        <button className='px-5 py-2.5 bg-black text-green-500 rounded-lg my-3'>Get Started</button>
       </div>
        </div>
    </div>
  )
}

export default Analytics
