import React, { FC, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { styles } from '../../../app/styles/style'
import { useLoginMutation } from '@/redux/features/auth/authApi'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

type Props = {
    setRoute: (route: string) => void
    setOpen: (open: boolean) => void
    refetch?:any
}

const schema = Yup.object().shape({
    email: Yup.string().required('Please enter your email address!').email('Invalid email'),
    password: Yup.string().required('Please enter your password!').min(6)
})

const Login: FC<Props> = ({ setRoute, setOpen, refetch }) => {
    const [show, setShow] = useState(false)
    const [login, {isSuccess, data, error}] = useLoginMutation()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            await login({email, password})
        }
    })

    useEffect(()=>{
        if(isSuccess){
            toast.success("Login successfully!")
            setOpen(false)
            refetch()
        }
        if(error){
            if("data" in error){
                const errorData = error as any
                toast.error(errorData.data.message)
            }
        }
    }, [isSuccess, error])

    const { errors, touched, values, handleChange, handleSubmit } = formik

    return (
        <div className='w-full'>
            <h1 className={`${styles.title}`}>
                Login with <span className='dark:text-[#F9D341]'>Learnify</span>
            </h1>
            <br />
            <form onSubmit={handleSubmit}>
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
                <div className='w-full mt-5 relative mb-1'>
                    <label className={`${styles.label}`} htmlFor="email">
                        Enter your password
                    </label>
                    <input
                        type={`${show ? 'text' : 'password'}`}
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
                    {errors.password && touched.password && (
                        <span className='text-red-500 pt-2 block'>{errors.password}</span>
                    )}
                </div>
                <div className='w-full mt-5'>
                    <input
                        type="submit"
                        value="Login"
                        className={`${styles.button} bg-emerald-400`}
                    />
                </div>
                <br />
                <hr />
                <div className='w-full mt-5 flex items-center justify-center'>
                    <button className={`${styles.socialButton} bg-slate-200 w-[49%] relative text-black`}
                     onClick={() => signIn('google')}><FcGoogle size={25} className='cursor-pointer absolute start-2' /><span className='absolute end-4'>Continue with Google</span></button>
                    <div className='mx-1'></div>
                    <button className={`${styles.socialButton} bg-stone-950 w-[49%] relative text-white`}
                     onClick={() => signIn('github')}><AiFillGithub size={25} className='cursor-pointer absolute start-2' /><span className='absolute end-4'>Continue with GitHub</span></button>
                </div>
                <h5 className='text-center pt-4 font-Poppins text-[14px]'>
                    Not have any account?{' '}
                    <span className='text-[#2190ff] pl-1 cursor-pointer' onClick={() => setRoute('Sign-Up')}>
                        Sign up
                    </span>
                </h5>
            </form>
            <br />
        </div>
    )
}

export default Login