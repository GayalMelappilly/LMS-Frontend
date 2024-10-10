'use client'

import { styles } from '@/app/styles/style'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import avatarIcon from '../../../public/assets/avatar.png'
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi'
import { useLoadUserQuery } from '@/redux/features/api/apiSlice'
import toast from 'react-hot-toast'

type Props = {
    avatar: string | null,
    user: any
}

const ProfileInfo: FC<Props> = ({avatar, user}) => {

    const [name, setName] = useState(user && user.name)
    const [updateAvatar, {isSuccess, error}] = useUpdateAvatarMutation()
    const [loadUser, setLoadUser] = useState(false)
    const {} = useLoadUserQuery(undefined, {skip: loadUser ? false : true})
    const [editProfile, {isSuccess:success, error: updateError}] = useEditProfileMutation()

    const imageHandler = async (e: any) => {
        
        const file = e.target.files[0]

        const fileReader = new FileReader()

        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar = fileReader.result
                updateAvatar(
                    avatar
                )
            }
        }
        fileReader.readAsDataURL(e.target.files[0])
    }

    useEffect(()=>{
        if(isSuccess || success){
            setLoadUser(true)
        }
        if(error || updateError){
            console.log(error)
        }
        if(success){
            toast.success("Profile updated successfully.")
        }
    },[isSuccess, error, success, updateError])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(name !== ''){
            await editProfile({
                name: name,
            })
        }
    }

  return (
    <>
        <div className='w-full flex justify-center'>
            <div className='relative'>
                <Image
                    src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
                    alt=''
                    width={120} 
                    height={120}
                    className='w-[120px] h-[120px] rounded-full cursor-pointer border-[3px] border-[#F9D341]'
                />
                <input 
                    type="file"
                    name=''
                    id='avatar'
                    className='hidden'
                    onChange={imageHandler}
                    accept='image/png, image/jpg, image/jpeg, image/webp'
                />
                <label htmlFor="avatar">
                    <div className='w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer'>
                        <AiOutlineCamera size={20} className='z-1' />
                    </div>
                </label>
            </div>
        </div>
        <br />
        <div className='w-full pl-6 800px:pl-10'>
            <form onSubmit={handleSubmit}>
                <div className="800px:w-[50%] m-auto block pb-4">
                    <div className='w-[100%]'>
                        <label className='block text-black dark:text-white'>Full Name</label>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='w-[100%]'>
                        <label className='block pt-5 text-black dark:text-white'>Email Address</label>
                        <input
                            type="email"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            readOnly
                            required
                            value={user?.email}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <input
                        className={`w-full 800px:w-[95%] h-[40px] border border-emerald-400 text-center text-black dark:text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 rounded-[3px] mt-8 cursor-pointer`} 
                        required
                        value="Update"
                        type="submit" 
                    />
                </div>
            </form>
        </div>
    </>
  )
}

export default ProfileInfo