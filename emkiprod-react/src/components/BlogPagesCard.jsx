import React from 'react'
import { useNavigate } from 'react-router'

function BlogPagesCard({ item }) {

    const { id, url, title, desc } = item
    const navigate = useNavigate()

    const handleCLick = () => {
        navigate(`blog/${id}`, { state: { id, url, title, desc } })

    }

    return (
        <div className=' w-[100%] sm:w-[46%] lg:w-[30%] rounded-[30px] border-[1px] overflow-hidden border-primary-light blog-card-element'>
            <div className='h-[272px] relative blog-card-main '>
                <img src={url} className='w-full h-full rounded-3xl object-cover ' />
                <button onClick={() => handleCLick()} className='bg-[#e32682] rounded-lg text-white text-xl font-medium py-[10px] px-5 text-center absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 z-50 duration-500  opacity-0'>Daha çox</button>
                <div className=' w-full absolute bottom-[10px] text-overlay z-50'><p className='text-white font-medium text-2xl text-center'>{title.length > 25 ? title.slice(0, 25) + '...' : title}</p></div>
            </div>
            <div className='more-text'>
                <p className='text-white font-normal text-base mx-4 my-3'>{desc.length > 70 ? title.slice(0, 70) + '...' : title}</p>
            </div>
        </div>
    )
}

export default BlogPagesCard