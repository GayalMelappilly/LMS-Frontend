'use client'

import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Loader from '../Loader/Loader'
import { useRouter } from 'next/navigation'

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (search === '') {
      return
    } else {
      router.push(`/courses?title=${search}`)
    }
  }

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className='w-full 1000px:flex items-center'>
            <div className="flex 800px:flex-row 400px:flex-col 800px:h-screen">
              <div className='1000px:w-[50%] 400px:w-full flex justify-end 400px:pt-[70px] 800px:pt-0 800px:pb-[70px] z-10'>
                <Image
                  src={data?.layout?.banner?.image?.url}
                  width={500}
                  height={500}
                  alt=""
                  className='object-contain 800px:max-w-full 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] 400px:max-w-[50%] 400px:mx-auto h-auto z-[10]'
                />
              </div>
              <div className='1000px:w-[60%] flex flex-col items-center 1000px:mt-[60px] 800px:mt-[70px] text-center 1000px:text-left 800px:text-center mt-[150px] 400px:mt-10 400px:px-10 pt-[50px] 400px:pt-0'>
                <h2 className='dark:text-[#ffffff] text-[#000000c7] text-[50px] w-full 1000px:text-[50px] 800px:text-[35px] 400px:text-[40px] font-[600] font-Josefin py-2 leading-tight  1500px:!w-[55%] 1100px:!w-[78%]'>
                  {data?.layout?.banner?.title}
                </h2>
                <br />
                <p className='dark:text-[#ffffff] text-[#000000ac] font-Josefin font-[600] text-[18px] 800px:text-[17px] 1000px:text-[17px] 1500px:!w-[55%] 1100px:!w-[78%]'>
                  {data?.layout?.banner?.subTitle}
                </p>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] 800px:h-[40px] bg-transparent relative'>
                  <input
                    type="search"
                    placeholder='Search Courses...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-transparent border dark:border-zinc-400 dark:border-2 dark:placeholder:text-[#ffffffdd] dark:placeholder:text-opacity-15 rounded-[12px] p-3 w-full h-full outline-none text-zinc-900 dark:text-[#ffffffe6] text-[18px] font-Poppins'
                  />
                  <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] 800px:h-[40px] right-0 top-0 rounded-r-[5px]'
                    onClick={handleSearch}>
                    <BiSearch className='text-emerald-500 dark:text-[#F9D341]' size={30} />
                  </div>
                </div>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center justify-center 400px:mb-10'>
                  <Image
                    src={require('../../../public/assets/client-1.jpg')}
                    alt=''
                    className='rounded-full ml-[-20px]'
                  />
                  <Image
                    src={require('../../../public/assets/client-2.jpg')}
                    alt=''
                    className='rounded-full ml-[-20px]'
                  />
                  <Image
                    src={require('../../../public/assets/client-3.jpg')}
                    alt=''
                    className='rounded-full ml-[-20px]'
                  />
                  <p className='font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]'>
                    500K+ People already trusted us.{' '}
                    <Link
                      href='/courses'
                      className='dark:text-yellow-500 text-emerald-500'
                    >
                      View Courses
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Hero

