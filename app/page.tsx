'use client'
import React, {FC, useState} from 'react'
import Heading from './utils/Heading'
import Header from './components/Header'
import Hero from './components/Route/Hero'

interface Props {}

const Page:FC<Props> = () => {

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)


  
  return (
    <div>
      <Heading 
        title="eLearning"
        description='eLearning is platform for students to learn and get help from teachers'
        keywords='Programming, MERN, Redux, Machine Learning'
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
    </div>
  )
}

export default Page