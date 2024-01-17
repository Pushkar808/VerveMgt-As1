import React from 'react'
import { Heading } from './heading'

const Contentgrid = (props) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-full mt-10 pt-10 md:px-32 px-10 font-medium text-lg  md:text-left text-center ${props?.classCss}`}>
            {props.children}
        </div>
    )
}

export default Contentgrid;