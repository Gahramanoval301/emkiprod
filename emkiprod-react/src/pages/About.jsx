import React from 'react'
import PageContainer from '../components/common_/PageContainer'
import HeadAbout from '../components/AboutUs/HeadAbout'
import OurEvents from '../components/AboutUs/OurEvents'

const About = () => {
  return (
    <PageContainer>
      <HeadAbout />
      <OurEvents/>
    </PageContainer>
  )
}

export default About