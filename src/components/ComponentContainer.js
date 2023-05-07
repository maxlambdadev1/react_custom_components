import { useEffect, useState } from "react";

const ComponentContainer = ( props ) => {
    return (
        <div className='rounded-lg border-2 border-sky-400'>
            <div className='text-center font-bold pb-3'>
                { props.title }
            </div>
            <div className="flex justify-evenly items-center p-3" 
                style={{backgroundColor : props.bgColor ? props.bgColor : '' , minHeight : '100px' }}
            >
                { props.children }
            </div>
        </div>
    )
}

export default ComponentContainer;