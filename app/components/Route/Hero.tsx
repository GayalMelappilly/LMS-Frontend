import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Hero: FC<Props> = (props) => {
    return (
        <div className='w-full 1000px:flex items-center'>
            <div className="flex 800px:flex-row 400px:flex-col 800px:h-screen">
                <div className='1000px:w-[40%] 400px:w-full flex justify-end 400px:pt-[70px] 800px:pt-0 z-10'>
                    <Image
                        src={require('../../../public/assets/banner-img-1.png')}
                        alt=""
                        className='object-contain 800px:max-w-full 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] 400px:max-w-[50%] 400px:mx-auto h-auto z-[10]'
                    />
                </div>
                <div className='1000px:w-[60%] flex flex-col items-center 1000px:mt-[60px] 800px:mt-[70px] text-center 1000px:text-left 800px:text-center mt-[150px] 400px:mt-10 400px:px-10 pt-[50px] 400px:pt-0'>
                    <h2 className='dark:text-white text-[#000000c7] text-[50px] px-3 w-full 1000px:text-[40px] 800px:text-[35px] 400px:text-[40px] font-[600] font-Josefin py-2 leading-tight'>
                        Improve your Online Learning Experience Better Instantly
                    </h2>
                    <br />
                    <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 800px:text-[17px] 1000px:text-[17px] 1500px:!w-[55%] 1100px:!w-[78%]'>
                        We have 40k+ Online Courses & 500k+ Online registered students. Find your desired Courses from them.
                    </p>
                    <br />
                    <br />
                    <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] 800px:h-[40px] bg-transparent relative'>
                        <input
                            type="search"
                            placeholder='Search Courses...'
                            className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin'
                        />
                        <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] 800px:h-[40px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]'>
                            <BiSearch className='text-white' size={30} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center'>
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
                                className='dark:text-[#46e256] text-[crimson]'
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

export default Hero

