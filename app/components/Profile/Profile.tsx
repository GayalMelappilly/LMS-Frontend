'use client'

import React, { FC, useState } from 'react'
import SideBarProfile from './SideBarProfile'

type Props = {
    user: any
}

const Profile: FC<Props> = ({user}) => {

    const [scroll, serScroll] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const [active, setActive] = useState(1)
    
    const logOutHandler = async () => {
        console.log("logout")
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
            <div className={`w-[60px] 800px:w-[310px] h-[450px] bg-slate-900 bg-opacity-90 border border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? 'top-[120px]' : 'top-[30px]'
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