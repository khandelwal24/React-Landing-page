import { faFacebook, faInstagram, faTwitch, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black'>
    
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex lg:flex-row flex-col place-items-baseline gap-10'>

    <div className='w-full'>
    <h1 className='text-3xl font-bold text-[#00da9f]'>REACT.</h1>
    <p className='my-2 text-sm text-gray-200 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mi nec purus lobortis rhoncus. In eget purus ac lorem fringilla elementum vel non massa. Aenean semper elit in porttitor rutrum. In a orci sit amet libero efficitur gravida et non risus. Vestibulum non ante eget augue auctor tempus eu ut nisl. Proin vitae nibh faucibus, laoreet ligula et, sollicitudin eros. Cras sit amet porttitor magna. Vestibulum sit amet augue nec quam sollicitudin molestie. Proin sit amet sollicitudin ipsum.</p>
    <div className='flex flex-row gap-5 justify-center md:justify-start py-3'>
            <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl'/>
            <FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl'/>
            <FontAwesomeIcon icon={faInstagram} className='text-white text-3xl'/>
            <FontAwesomeIcon icon={faTwitter} className='text-white text-3xl'/>
    </div>
    </div>

    <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
    <div className='text-white text-center md:text-left'>
            <h3 className='text-xl font-bold text-green-500'>Solutions</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
    <div className='text-white text-center md:text-left'>
            <h3 className='text-xl font-bold text-green-500'>Solutions</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
    <div className='text-white text-center md:text-left'>
            <h3 className='text-xl font-bold text-green-500'>Solutions</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
    <div className='text-white text-center md:text-left'>
            <h3 className='text-xl font-bold text-green-500'>Solutions</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
    
    </div>
        
    </div>
        
      
    </div>
  )
}

export default Footer
