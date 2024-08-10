import React from 'react'
import OurEventsSwiper from './Swiper'

const OurEvents = ({t}) => {
  return (
      <div className='section text-white_'>
      <h2 className='text-3xl font-semibold'>{t("about.ourevents")}</h2>
          <OurEventsSwiper/>
    </div>
  )
}

export default OurEvents