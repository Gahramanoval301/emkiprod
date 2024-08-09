import React from 'react'
import HeroSliderDesktop from './HeroSliderDesktop'
import { FaCircleArrowRight } from 'react-icons/fa6'

const HomeHead = () => {
    return (
        <div className='w-10/12 m-auto flex gap-10 overflow-hidden text-white_shadow hero'>
            <div className='sm:w-[100%] mt-11 pt-14'>
                <h1 className='text-4xl md:text-7xl font-semibold  whitespace-normal mb-10'>Elevate Your Concert Experience</h1>
                <p className='whitespace-normal text-base font-normal mb-7'>Welcome to the ultimate destination for music enthusiasts and concert-goers! At EMKI Production, we&apos;re passionate about bringing you the very best in live music experiences. Whether you&apos;re a die-hard fan or a casual listener, we&apos;ve got something special in store for you.</p>
                <button className='bg-white_ text-primary-default font-semibold tracking-wider px-8 py-2 rounded-lg align-middle text-primary flex gap-3 items-center hover:bg-[#e32682] hover:text-[#fff] transition-all duration-500'>Events <FaCircleArrowRight />  </button>
            </div>
            <div className='w-4/5'>
                <HeroSliderDesktop />
            </div>
        </div>
    )
}

export default HomeHead