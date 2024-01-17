import React from 'react'

export const HoverImg = (props) => {
    return (
        <span className=' cursor-pointer'>
            <div>
                <img src={props?.src} className='w-28 h-24' />
            </div>
            <p className='text-center text-white hover:text-blue-300'>
                {props?.text}
            </p>
        </span>


    )
}
