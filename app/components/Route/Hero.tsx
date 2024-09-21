import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Hero: FC<Props> = (props) => {
    const { data, isLoading } = useGetHeroDataQuery("Banner", {});
    return (
        <>
        {
            isLoading ? (
                <Loader 
            )
        }
        </>
    )
}

export default Hero

