import React from 'react'
import { useInView } from "react-intersection-observer"
export const HoverImg = (props) => {
    const [ref, inView] = useInView({ threshold: 2 })
    return (
        <span className={` ${inView ? 'animate__animated  animate__jackInTheBox animate__delay-1s' : ''} cursor-pointer`}>
            <div className='text-center w-full'>
                <img src={props?.src} className='md:w-full w-36 h-24' />
            </div>
            <p className='text-center text-white text-wrap'>
                {props?.text}
            </p>
        </span>


    )
}
