import React from 'react'
import PageContainer from '../components/common_/PageContainer'
import HeadAbout from '../components/AboutUs/HeadAbout'
import OurEvents from '../components/AboutUs/OurEvents'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <HeadAbout t={t} />
      <OurEvents t={t} />
    </PageContainer>
  )
}

export default About