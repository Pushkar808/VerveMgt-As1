import React from 'react'
import { useInView } from "react-intersection-observer"
export const Heading = (props) => {
    const [ref, inView] = useInView({ threshold: 0.5 })
    return (
        <>
            <div className={`text-center md:text-left text-red-400 text-2xl font-bold uppercase mx-2 my-4 ${props?.classCss}`} >
                {
                    props?.h2 &&
                    <h2 ref={ref} className={`${inView ? 'animate__headShake animate__animated' : ''}`}>
                        {props?.heading}
                    </h2>
                }
                {
                    props?.h3 && <h3>
                        {props?.heading}
                    </h3>
                }
            </div>
        </>
    )
}
