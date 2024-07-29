import { searchModalIcon } from '@/woomega-nextjs/libs/Icon'
import Image from 'next/image'
import React from 'react'

export const SearchModal = ({ handleClose }: any) => {
    return (
        <div className="fixed inset-0 bg-secondary bg-opacity-95 z-50 flex">
            <div className="bg-transparent size-full flex items-center justify-center">
                <button className="text-primary text-4xl absolute top-8 right-8" onClick={handleClose}>&#10005;</button>
                <div className="container my-0 mx-auto p-4 border-primary border-b-2 flex items-center gap-3">
                    <Image src={searchModalIcon.modalSearchIcon} alt='' className='size-16 text-primary' />
                    <input type="text" placeholder='Search' className='bg-transparent w-full h-16 placeholder:text-4xl placeholder:text-white focus:outline-none text-white text-4xl' />
                </div>
            </div>
        </div>
    )
}