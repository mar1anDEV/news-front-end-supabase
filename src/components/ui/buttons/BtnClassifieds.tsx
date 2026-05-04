import React from 'react'
import { Link } from 'react-router'
interface Props{
    actionLabel?: string,
    onClickFn?: ()=> void,
    path?: string,
    addBtn?: boolean,
    classCustom?: string
}

function BtnClassifieds({actionLabel,path,addBtn,classCustom}:Props) {
  return (
    <button type='button' className={`${classCustom} `}>
        <Link to={""} className={`text-md mt-6 sm:mt-0 px-4 py-2 rounded bg-blue-900 hover:bg-blue-600 transition-colors duration-300 text-white font-bold flex flex-row items-center justify-center gap-x-2.5`}>
            {addBtn && (<span>+</span>)}
            <span>{actionLabel}</span>
            <span className='hidden'>{path}</span>
        </Link>
    </button>
  )
}

export default BtnClassifieds