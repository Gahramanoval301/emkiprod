import React from 'react'
import { useTranslation } from 'react-i18next'

const HeadAbout = ({t}) => {
  return (
      <section className='section text-white_'>
          <div className='grid  grid-cols-1 xl:grid-cols-2 gap-x-20'>
              <div className=''>
                  <h3 className='text-2xl sm:text-5xl leading-[1.4]'>{t("about.unleashyoureventspotential")}</h3>
                  <h2 className='text-2xl sm:text-[50px] text-border mt-2 leading-[1.4]'>{t("about.elevateyourstreamingwithourexpertise")}</h2>
                  <p className='my-5 sm:text-xl text-justify leading-relaxed'>{t("home.sponsorText")}</p>
              </div>
              <div className='flex justify-center items-center'>
                  <video src="" poster="/assets/video_thumbnail.png" controls width="100%" height="100%"></video>
              </div>
          </div>
      </section>
  )
}

export default HeadAbout