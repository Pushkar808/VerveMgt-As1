import React from 'react'

const Contentgrid = (props) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-full mt-10 pt-10 md:px-32 px-10 font-medium text-lg  md:text-left ${props?.classCss}`}>
            {props.children}
        </div>
    )
}

export default Contentgrid;