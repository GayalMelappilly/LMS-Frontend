'use client'

import React, { FC, useEffect, useState } from 'react'
import SideBarProfile from './SideBarProfile'
import { useLogOutQuery } from '@/redux/features/auth/authApi'
import { signOut } from 'next-auth/react'
import ProfileInfo from './ProfileInfo'
import ChangePassword from './ChangePassword'
import CourseCard from '../Course/CourseCard'
import { useGetUsersAllCoursesQuery } from '@/redux/features/courses/coursesApi'
import { useRouter } from 'next/navigation'

type Props = {
    user: any
}

const Profile: FC<Props> = ({ user }) => {

    const [scroll, setScroll] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const [active, setActive] = useState(1)
    const [logout, setLogout] = useState(false)
    const [courses, setCourses] = useState([])
    const router = useRouter()

    const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});

    const { } = useLogOutQuery(undefined, {
        skip: !logout ? true : false
    })

    const logOutHandler = async () => {
        setLogout(true)
        setTimeout(() => {
            router.push('/');
        }, 1000);
        signOut()
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 85) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }

    useEffect(()=>{
        if (data) {
            const filteredCourses = user.course.map((userCourse: any) =>
                data.courses.find((course: any) => course._id === userCourse._id)
              )
              .filter((course: any) => course !== undefined);
            setCourses(filteredCourses);
          }
    },[data])

    return (
        <div className='w-[85%] flex mx-auto'>
            <div className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-zinc-900 bg-opacity-90 border rounded-[5px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-zinc-950 shadow-zinc-200 bg-white border-none border-[#00000037] mt-[80px] mb-[80px] sticky ${scroll ? 'top-[120px]' : 'top-[30px]'
                } left-[30px]`}>
                <SideBarProfile
                    user={user}
                    active={active}
                    avatar={avatar}
                    setActive={setActive}
                    logOutHandler={logOutHandler}
                />
            </div>
            {
                active === 1 && (
                    <div className='w-full h-full bg-transparent mt-[80px]'>
                        <ProfileInfo avatar={avatar} user={user} />
                    </div>
                )
            }
            {
                active === 2 && (
                    <div className='w-full h-full bg-transparent mt-[80px]'>
                        <ChangePassword />
                    </div>
                )
            }
            {
                active === 3 && (
                    <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
                        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
                            {courses &&
                                courses.map((item: any, index: number) => (
                                    <CourseCard item={item} key={index} isProfile={true} />
                                ))}
                        </div>
                        {courses.length === 0 && (
                            <h1 className="text-center text-[18px] font-Poppins dark:text-white text-black">
                                You don&apos;t have any purchased courses!
                            </h1>
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default Profile