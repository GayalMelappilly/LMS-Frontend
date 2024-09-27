'use client'

import React, { FC, useState } from 'react'
import Protected from '../hooks/useProtected'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Profile from '../components/Profile/Profile'
import { useSelector } from 'react-redux'
import { stat } from 'fs'

type Props = {}

const page: FC<Props> = () => {

    const [open, setOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(5)
    const [route, setRoute] = useState('Login')
    const {user} = useSelector((state: any) => state.auth)

    return (
        <div className='h-screen'>
            <Protected>
                <Heading
                    title={`${user?.name} profile - Learnify`}
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
                <Profile
                    user={user}
                />
            </Protected>
        </div>
    )
}

export default page