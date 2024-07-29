"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { productActionIcon } from './productActionArr'
import Image from 'next/image'

function ProductAction() {
    const [hoverOn, setHoverOn] = useState<any | null>(null);

    return (
        <div className='size-full flex flex-col gap-2'>
            {productActionIcon.map((item, index: any) => (
                <div key={item.id}
                    className='bg-white p-1 transition-all ease-in-out duration-500 hover:bg-secondary size-8  '
                    onMouseEnter={() => setHoverOn(index)}
                    onMouseLeave={() => setHoverOn(null)}>
                    <Link href={item.path}>
                        <Image src={hoverOn === index ? item.icon : item.activeIcon} alt='' className='' />
                    </Link>
                </div>)
            )}
        </div>
    )
}

export default ProductAction