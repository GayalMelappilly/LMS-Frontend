'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";
import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Learnify - Admin"
          description="Learnify - Learning made simple"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-screen">
            <DashboardHero />
           <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page