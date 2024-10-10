'use client'
import React, { useState } from 'react'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Policy from './Policy'
import Footer from '../components/Footer'

type Props = {}

const Page = (props: Props) => {
    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(3)
    const [route, setRoute] = useState('Login')
  return (
    <div>
        <Heading 
            title='Policy - Learnify'
            description='Learnify - Learning made simple'
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

export default Page