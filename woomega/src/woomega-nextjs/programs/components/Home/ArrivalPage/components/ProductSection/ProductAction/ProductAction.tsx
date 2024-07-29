"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { productActionIcon } from './productActionArr'
import Image from 'next/image'

function ProductAction() {

    const [hoverON, setHoverOn] = useState(null);

    return (
        <div className='size-6'>
            {productActionIcon.map((item, index: any) => (
                <div key={item.id}
                    className=''
                    onMouseEnter={() => setHoverOn(index)}
                    onMouseLeave={() => setHoverOn(null)}>
                    <Link href={item.path}><Image src={hoverON === index ? item.activeIcon : item.icon} alt='' className='' /></Link>
                </div>)
            )}
        </div>
    )
}

export default ProductAction