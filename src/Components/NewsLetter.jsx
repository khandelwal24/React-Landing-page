import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center'>
    <div className='lg:col-span-2'>
        <h1 className='text-3xl font-bold w-full'>Wants tips & triks to optimize your flow ?</h1>
        <p>Sign up to Our Newsletter & Stay Up to date</p>
    </div>
    <div className='my-4'>
        <div className='flex gap-2 items-center lg:flex-row flex-col my-2'>
            <input type="email"  placeholder='Enter Email here' className='sm:w-1/2 w-full px-5 py-2.5 rounded-lg text-black'/>
            <button className='sm:w-1/3 w-full px-5 py-2.5 bg-green-400 text-black rounded-lg font-semibold'>Notify Me</button>
        </div>
            <p>We can bout the protection of your data. Read Our <span className='text-green-500 hover:cursor-pointer hover:underline'> Privacy Policy</span></p>
    </div>
      </div>
    </div>
  )
}

export default NewsLetter
