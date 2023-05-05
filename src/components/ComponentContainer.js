import { useEffect, useState } from "react";

const ComponentContainer = ( props ) => {
    return (
        <div className='rounded-lg border-2 border-sky-400 m-3 p-3'>
            <div className='text-center font-bold pb-3'>
                { props.title }
            </div>
            <div className="flex justify-center items-center p-8" 
                style={{backgroundColor : props.bgColor ? props.bgColor : '' }}
            >
                { props.children }
            </div>
        </div>
    )
}

export default ComponentContainer;