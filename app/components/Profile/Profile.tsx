'use client'

import React, { FC, useState } from 'react'
import SideBarProfile from './SideBarProfile'
import { useLogOutQuery } from '@/redux/features/auth/authApi'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

type Props = {
    user: any
}

const Profile: FC<Props> = ({user}) => {

    const [scroll, serScroll] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const [active, setActive] = useState(1)
    const [logout, setLogout] = useState(false)

    const {} = useLogOutQuery(undefined, {
        skip: !logout ? true : false
    })
    
    const logOutHandler = async () => {
        setLogout(true)
        await signOut()
        
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 85) {
                serScroll(true)
            } else {
                serScroll(false)
            }
        })
    }

    return (
        <div className='w-[85%] flex mx-auto'>
            <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000037] rounded-[5px] dark:shadow-sm shadow-xl mt-[80px] mb-[80px] sticky ${scroll ? 'top-[120px]' : 'top-[30px]'
                } left-[30px]`}>
                <SideBarProfile
                    user={user}
                    active={active}
                    avatar={avatar}
                    setActive={setActive}
                    logOutHandler={logOutHandler}
                />
            </div>
        </div>
    )
}

export default Profile