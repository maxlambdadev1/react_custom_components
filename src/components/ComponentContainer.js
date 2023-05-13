import { useEffect, useState } from "react";
import classNames from 'classnames';

const ComponentContainer = ( props ) => {
    return (
        <div className={classNames('rounded-lg border-2 border-sky-400 overflow-hidden', props.className)}>
            <div className='text-center font-bold py-3'>
                { props.title }
            </div>
            <div className="flex justify-evenly items-center p-3" 
                style={{backgroundColor : props.bgColor ? props.bgColor : '' , minHeight : '150px' }}
            >
                { props.children }
            </div>
        </div>
    )
}

export default ComponentContainer;