import React from 'react'
import line from '../../public/assets/Rectangle 85.png';
import imageFirst from '../../public/assets/rectangle1.bfa8dab7d147fe4e9fb0aa72c4a6ca9e.svg';
import imageSecond from '../../public/assets/rectangle2.f1dcaa02e43c684875e14a0a870221f4.svg'
import imageThird from '../../public/assets/rectangle3.d4439086c2e764fe232bbfdd79ed6555.svg'
import imageFourth from '../../public/assets/rectangle4.c163e44074fcf20421fcaf8a5e02283c.svg';
const OurValues = () => {
  return (
    <div className='our-values-section text-white'>
        <div className='w-80 flex items-center justify-center py-3 text-2xl font-semibold'>
            <h2>Our Values</h2>
        </div>
        <div className='our-values flex justify-evenly p-14 flex-wrap'>
            <div className='flex items-center h-52 box'>
                <div>
                    <img src={imageFirst} alt="check" width={'156px'} height={'156px'}/>
                </div>
                <div>
                    <h3>Trust</h3>
                    <div className='line'><img src={line} alt="line" /></div>
                    <p className='w-60'>We always give frank feedback and actionable advice to help you see the big picture.</p>
                </div>
            </div>
            <div className='flex items-center h-52 box'>
                <div>
                    <img src={imageSecond} alt="list" width={'156px'} height={'156px'}/>
                </div>
                <div>
                    <h3>Transparency</h3>
                    <div className='line'><img src={line} alt="line" /></div>
                    <p className='w-60'>We help you understand things clearly by removing all the confusing information</p>
                </div>
            </div>
            <div className='flex items-center h-52 box'>
                <div>
                    <img src={imageThird} alt="bulb" width={'156px'} height={'156px'}/>
                </div>
                <div>
                    <h3>Innovation</h3>
                    <div className='line'><img src={line} alt="line" /></div>
                    <p className='w-60'>Our events have been meticulously built and match the ambition of modern businesses.</p>
                </div>
            </div>
            <div className='flex items-center h-52 box'>
                <div>
                    <img src={imageFourth} alt="collaboration" width={'156px'} height={'156px'}/>
                </div>
                <div>
                    <h3>Collaboration</h3>
                    <div className='line'><img src={line} alt="line" /></div>
                    <p className='w-60'>We approach every engagement with confidence in our ability to forge a long-term relationships.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValues