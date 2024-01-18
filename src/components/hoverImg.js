import React from 'react'

export const HoverImg = (props) => {
    return (
        <span className=' cursor-pointer'>
            <div>
                <img src={props?.src} className='w-28 h-24' />
            </div>
            <p className='text-center text-white'>
                {props?.text}
            </p>
        </span>


    )
}
