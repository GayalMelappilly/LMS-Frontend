'use client'

import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'
import Heading from '../../utils/Heading'
import CreateCourse from '../../components/Admin/course/CreateCourse'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'
import AdminProtected from '@/app/hooks/adminProtected'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title='Learnify - Admin'
                    description='Learnify - Learning made simple'
                    keywords='Programming,MERN,Redux,Machine Learning'
                />
                <div className='flex'>
                    <div className='1500px:w-[16%] w-1/5'>
                        <AdminSidebar />
                    </div>
                    <div className='w-[85%]'>
                        <DashboardHeader />
                        <CreateCourse />
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page