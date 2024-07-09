import React, { FC, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { styles } from '../../../app/styles/style'
import { error } from 'console'
import { Span } from 'next/dist/trace'
import { useRegisterMutation } from '@/redux/features/auth/authApi'
import toast from 'react-hot-toast'

type Props = {
    setRoute: (route: string) => void
}

const schema = Yup.object().shape({
    name: Yup.string().required('Please enter your name!'),
    email: Yup.string().required('Please enter your email address!').email('Invalid email'),
    password: Yup.string().required('Please enter your password!').min(6)
})

const Signup: FC<Props> = ({ setRoute }) => {
    const [show, setShow] = useState(false)
    const [register, {data, isSuccess, error}] = useRegisterMutation()

    useEffect(()=>{
        if(isSuccess){
            const message = data?.message || "Registration successful"
            toast.success(message)
            setRoute('Verification')
        }
        if(error){
            if("data" in error){
                const errorData = error as any
                toast.error(errorData.data.message)
            }
        }
    }, [isSuccess, error])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            const data = {
                name, 
                email,
                password
            }
            await register(data)
        }
    })

    const { errors, touched, values, handleChange, handleSubmit } = formik

    return (
        <div className='w-full'>
            <h1 className={`${styles.title}`}>
                Get started with Learnify
            </h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className={`${styles.label}`} htmlFor="email">
                        Enter your Name
                    </label>
                    <input
                        type="text"
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        id='name'
                        placeholder='Name here'
                        className={`${errors.name && touched.name && "border-red-500"} ${styles.input}`}
                    />
                    {errors.name && touched.name && (
                        <span className='text-red-500 pt-2 block'>{errors.name}</span>
                    )}
                </div>
                <label className={`${styles.label}`} htmlFor="email">
                    Enter your Email
                </label>
                <input
                    type="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    placeholder='someone@gmail.com'
                    className={`${errors.email && touched.email && "border-red-500"} ${styles.input}`}
                />
                {errors.email && touched.email && (
                    <span className='text-red-500 pt-2 block'>{errors.email}</span>
                )}
                <div className='w-full mt-4 relative mb-1'>
                    <label className={`${styles.label}`} htmlFor="email">
                        Enter your password
                    </label>
                    <input
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        id='password'
                        placeholder='password'
                        className={`${errors.password && touched.password && "border-red-500"} ${styles.input}`}
                    />
                    {!show ? (
                        <AiOutlineEyeInvisible
                            size={20}
                            className='absolute bottom-2.5 right-2 z-1 cursor-pointer'
                            onClick={() => setShow(true)}
                        />
                    ) : (
                        <AiOutlineEye
                            size={20}
                            className='absolute bottom-2.5 right-2 z-1 cursor-pointer'
                            onClick={() => setShow(false)}
                        />
                    )}
                </div>
                {errors.password && touched.password && (
                    <span className='text-red-500 pt-2 block'>{errors.password}</span>
                )}
                <div className='w-full mt-5'>
                    <input
                        type="submit"
                        value="Sign Up"
                        className={`${styles.button}`}
                    />
                </div>
                <br />
                <hr />
                <div className='w-full mt-5 flex items-center justify-center'>
                    <button className={`${styles.socialButton} bg-slate-200 w-[49%] relative text-black`}><FcGoogle size={25} className='cursor-pointer absolute start-2' /><span className='absolute end-4'>Continue with Google</span></button>
                    <div className='mx-1'></div>
                    <button className={`${styles.socialButton} bg-stone-950 w-[49%] relative text-white`}><AiFillGithub size={25} className='cursor-pointer absolute start-2' /><span className='absolute end-4'>Continue with GitHub</span></button>
                </div>
                <h5 className='text-center dark:text-white text-black pt-4 font-Poppins text-[14px]'>
                    Already have an account?{' '}
                    <span className='text-[#2190ff] pl-1 cursor-pointer' onClick={() => setRoute('Login')}>
                        Sign In
                    </span>
                </h5>
            </form>
            <br />
        </div>
    )
}

export default Signup