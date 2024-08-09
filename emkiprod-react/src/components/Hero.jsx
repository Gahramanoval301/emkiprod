import React from "react";
import HeroSliderDesktop from "./HeroSliderDesktop";
import HeroSliderMobile from "./HeroSliderMobile";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t} = useTranslation();
    return (
      <div className='hero text-white'>
                    <div className='w-10/12 m-auto flex gap-10 overflow-hidden'>
                        <div className='sm:w-[100%] mt-11 pt-14'>
                    <h1 className='text-4xl md:text-7xl font-semibold  whitespace-normal mb-10'>{t("home.elevateyourconcertexperience")}</h1>
                    <p className='whitespace-normal text-base font-normal mb-7'>{t("home.welcometotheultimatedestinationformusicenthusiastsandconcertgoersatemkiproductionwerepassionateaboutbringingyoutheverybestinlivemusicexperienceswhetheryoureadiehardfanoracasuallistenerwevegotsomethingspecialinstoreforyou")}</p>
                            <button className='bg-white_ text-primary-default font-semibold tracking-wider px-8 py-2 rounded-lg align-middle text-primary flex gap-3 items-center hover:bg-[#e32682] hover:text-[#fff] transition-all duration-500'>Events <FaCircleArrowRight />  </button>
                        </div>
                        <div className='w-4/5'>
                            <HeroSliderDesktop />
                        </div>
                    </div>
                    <HeroSliderMobile />
                </div>
                
  );
}

export default Hero;
