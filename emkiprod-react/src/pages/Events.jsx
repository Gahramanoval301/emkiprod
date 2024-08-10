import React from 'react'
import PageContainer from '../components/common_/PageContainer'
import { discoverEventsData } from '../data/discoverEvents'
import i18n from '../i18n'
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const lang = ['EN', 'AZ' , 'RU'];

const Events = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h3 className='text-white flex justify-center w-96 text-2xl h-24 items-end'>{t('events.event')}</h3>
      <div className='grid grid-cols-3 m-auto events-section place-content-center'>
        {discoverEventsData.map(({id, title, thumbnail, location, price, date, ticketURL}) => {
          return (
            <div className='section hover:cursor-pointer w-[450px] section-reused' key={id}>
              <div className='h-[380px] event-box'>
                <img src={thumbnail} alt={`${title}'s concert`} className='object-contain rounded-3xl' width={"360px"} height={"360px"}/>
                <div className='overlay'>
                  <a href={ticketURL} target='_blank'><button>{t("events.ReadMore")}</button></a>
                </div>
              </div>
              <div className='border-[1px] rounded-3xl border-primary-light py-2 px-5  text-white_  hover:bg-primary-light event'>
                  <div className='flex justify-between font-semibold my-2'>
                    <p className='font-extrabold text-xl'>{title}</p>
                    <p className='text-pink'>{price}</p>
                  </div>
                  <div className='flex justify-start gap-1 my-2 text-sm'>
                    <p>{date}</p>
                    <span>&bull;</span>
                    <p>{location}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </PageContainer>
  )
}

export default Events