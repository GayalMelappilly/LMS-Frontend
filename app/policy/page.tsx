'use client'
import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Policy from './Policy'
import Footer from '../components/Footer'

type Props = {}

const page = (props: Props) => {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(3)
    const [route, setRoute] = useState('Login')
  return (
    <div>
        <Heading 
            title='Policy - Learnify'
            description='Learnify - Easiest way to learn.'
            keywords='Programming, Web development'
        />
        <Header 
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            route={route}
            setRoute={setRoute}
        />
        <Policy />
        <Footer />
    </div>
  )
}

export default page