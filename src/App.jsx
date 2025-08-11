import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Counselling from './Components/Counselling'
import AutoPlay from './Components/Autoplay'
import Admissions from './Components/Admissions'
import Highlights from './Components/Highlights'
import Achievements from './Components/Achievements'
import Vip from './Components/Vip'
import Cards from './Components/Cards'
import Association from './Components/Association'
import Institutions from './Components/Institutions'
import Facts from './Components/Facts'
import Footer from './Components/Footer'
import { useState } from 'react'
import SectionNavigator from './Components/SectionNavigator'
import { useCallback } from 'react'
import News_and_Events from './Components/News_and_Events'
import "./App.css"

const App = () => {

  const [active, setActive] = useState('achieve')

  const activeHandler = useCallback((compName) => {
    setActive(compName)
  }, [])

  return (
    <>
      <Navbar />
      <Carousel />
      <div id='hover-img'>
        <Counselling />
        <SectionNavigator fn={activeHandler} act={active} />
        {active === 'highlights' && <Highlights />}
        {active === 'achieve' && <Achievements />}
        {active === 'vip' && <Vip />}
        {active === 'sona' && <Cards />}
        {active === 'news' && <News_and_Events />}
        <Association />
        <Institutions />
        <Facts />
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App