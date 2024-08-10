import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoTicket } from 'react-icons/io5';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(true);
    const [index, setIndex] = useState(0);
    const languages = ['en', 'ru', 'az'];
    const langNames = {
        en: 'EN',
        ru: 'RU',
        az: 'AZ'
    };

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setFlag(false);
    };

    return (
        <div className='flex items-center'>
            <div className='relative hidden lg:block'>
                <div className='flex items-center text-base cursor-pointer select-none' onClick={() => setFlag(!flag)}>
                    {langNames[languages[index]]}
                    {flag ? <FaChevronDown className='w-3 mx-2' /> : <FaChevronUp className='w-3 mx-2' />}
                </div>
                <div style={flag ? { display: 'none' } : { display: 'block' }} className='absolute top-full mt-2 text-white bg-secondary z-50'>
                    {languages.map((lng, i) => (
                        i !== index && (
                            <div key={i} className='text-base cursor-pointer px-4 py-2 hover:bg-[#111526]' onClick={() => { setIndex(i); handleLanguageChange(lng); }}>
                                {langNames[lng]}
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className='text-[#101426] font-medium text-xl ml-6 hover:text-[#fff] transition-all duration-500 headerBuyTicket'>
                <button className='bg-white px-8 py-2 rounded-lg align-middle hidden lg:inline-block'>{t("navbar.buytickets")}</button>
                <button className='bg-white px-2 py-2 rounded-lg align-middle mx-[1px]'><IoTicket className='w-5 h-7' /></button>
            </div>
        </div>
    );
};

export default LanguageSelector;
