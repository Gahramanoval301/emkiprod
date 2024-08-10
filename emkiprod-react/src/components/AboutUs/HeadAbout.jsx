import React from 'react'
import { useTranslation } from 'react-i18next'

const HeadAbout = () => {
    const { t } = useTranslation();
  return (
      <section className='section text-white_'>
          <div className='grid grid-cols-2 gap-x-20'>
              <div className=''>
                  <h3 className='text-5xl leading-[1.4]'>{t("about.unleashyoureventspotential")}</h3>
                  <h2 className='text-[50px] text-border mt-2'>{t("about.elevateyourstreamingwithourexpertise")}</h2>
                  <p className='my-5 text-xl text-justify leading-relaxed'>{t("home.showyoureventtotheworldthroughanyplatformweareleadersinstreamingandbroadcastservicesforeventsofferingconsultingservicesanddevelopmentofcompletesystemsforourclientsineventbroadcasting")}</p>
              </div>
              <div className='flex justify-center items-center'>
                  <video src="" poster="/assets/video_thumbnail.png" controls width="100%" height="100%"></video>
              </div>
          </div>
      </section>
  )
}

export default HeadAbout