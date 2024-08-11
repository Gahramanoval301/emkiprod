import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/img/logo.svg';
import rectangle from '/assets/img/rectangle.svg';
import './../styles/header.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const lang = ['EN', 'AZ', 'RU']


const Header = () => {
    const { t } = useTranslation();

    const [index, setIndex] = useState(0)
    const [flag, setFlag] = useState(true)
    const [show, setShow] = useState(true)

    return (
        <div>
            <header onClick={() => { !flag && setFlag(!flag) }} className='w-full text-white_ '>
                <nav className='flex bg-primary-default lg:w-[90%] lg:h-auto h-[70px] w-full m-auto justify-between bg-primary py-6 px-8 z-[999] top-0 right-0 fixed lg:relative  rounded-none items-center lg:rounded-bl-24 lg:rounded-br-24'>
                    <div onClick={() => setShow(!show)} className='flex lg:hidden flex-col gap-[6px] hamburger cursor-pointer'>
                        <img className={`select-none transition-transform duration-300 ${!show ? 'rotate-45 translate-y-2' : 'rotate-0'}`} src={rectangle} />
                        <img className={`select-none transition-transform duration-300 ${!show ? '-rotate-45' : 'rotate-0'}`} src={rectangle} />
                    </div>
                    <img className='w-20 lg:w-[119px]' src={logo} alt="logo" />
                    <div className=' hidden lg:block'>
                        <Link className='mx-3 hover:text-[#e32682] transition-all duration-500' to='/'>{t("navbar.home")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] transition-all duration-500' to='/events'>{t("navbar.events")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] transition-all duration-500' to='/blogs'>{t("navbar.blogs")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] transition-all duration-500' to='/sponsors'>{t("navbar.sponsors")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] transition-all duration-500' to='/about'>{t("navbar.aboutus")}</Link>
                    </div>
                    <LanguageSelector/>
                </nav>
                {/*  H A M B U R G E R   M E N U  */}
                <div className={`xs:w-64 w-full pt-16 h-full px-4 mt-14 bg-white fixed top-0 z-[500] ${show && 'close'} duration-500`}>
                    <div className='mx-3  relative border-[#C5CEE0] border-[1px] w-14 h-8 flex items-center justify-center text-primary-default' >
                        <div className='flex items-center text-base text-primary cursor-pointer select-none p-1' onClick={() => setFlag(!flag)}>{lang[index]}{flag ? <FaChevronDown className='w-3 mx-2' /> : <FaChevronUp className='w-3 mx-2' />}</div>
                        <div style={flag ? { display: 'none' } : { display: 'block' }} className='absolute top-full mt-2 bg-white_ text-primary hamburger-lang '>
                            {lang.map((elem, i) => ((i !== index) && <div key={i} className='text-base cursor-pointer px-4 py-2' onClick={() => { setIndex(i); setFlag(!flag) }}>{elem}</div>))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mt-7 text-primary-default font-semibold tracking-wider text-xl'>
                        <Link className='mx-3 hover:text-[#e32682] text-primary transition-all duration-500' to='/'>{t("navbar.home")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] text-primary transition-all duration-500' to='/events'>{t("navbar.events")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] text-primary transition-all duration-500' to='/blogs'>{t("navbar.blogs")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] text-primary transition-all duration-500' to='/sponsors'>{t("navbar.sponsors")}</Link>
                        <Link className='mx-3 hover:text-[#e32682] text-primary transition-all duration-500' to='/about'>{t("navbar.aboutus")} Us</Link>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header
