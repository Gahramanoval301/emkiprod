import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LanguageSelector = ({isMobileNavbar}) => {
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
        setFlag(true);
        i18n.changeLanguage(lng);
    };

    return (
        <div className='flex items-center'>
            <div className={`relative ${isMobileNavbar ? "block" : "hidden"} ${isMobileNavbar ? "lg:hidden" : "lg:block"} `}>
                <div className={`flex items-center text-base cursor-pointer select-none ml-3 p-1 ${isMobileNavbar && "text-primary-default border-2"}`} onClick={() => setFlag(!flag)}>
                    {langNames[languages[index]]}
                    {flag ? <FaChevronDown className={`w-3 mx-2 ${isMobileNavbar && "text-primary-default"}`} /> : <FaChevronUp className={`w-3 mx-2 ${isMobileNavbar && "text-primary-default"}`} />}
                </div>
                <div style={flag ? { display: 'none' } : { display: 'block' }} className='absolute top-full mt-2 ml-3 text-white bg-secondary z-50'>
                    {languages.map((lng, i) => (
                        i !== index && (
                            <div key={i} className='text-base cursor-pointer px-4 py-2 hover:bg-[#111526]' onClick={() => { setIndex(i); handleLanguageChange(lng); }}>
                                {langNames[lng]}
                            </div>
                        )
                    ))}
                </div>
            </div>
         
        </div>
    );
};

export default LanguageSelector;
