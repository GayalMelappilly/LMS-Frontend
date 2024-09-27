'use client'

import React from 'react'
import AdminSidebar from '../../../components/Admin/sidebar/AdminSidebar'
import Heading from '../../../utils/Heading'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'
import AdminProtected from '@/app/hooks/adminProtected'
import EditCourse from '@/app/components/Admin/course/EditCourse'

type Props = {}

const page = ({params}: any) => {

    const id = params?.id

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
                        <EditCourse id={id} />
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page