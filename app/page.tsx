'use client'
import React, {FC, useState} from 'react'
import Heading from './utils/Heading'
import Header from './components/Header'
import Hero from './components/Route/Hero'
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from './components/Footer'

interface Props {}

const Page:FC<Props> = () => {

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [route, setRoute] = useState('Login')
  
  return (
    <div>
      <Heading 
        title="Learnify"
        description='Learnify - Learning made simple'
        keywords='Programming, MERN, Redux, Machine Learning'
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Page