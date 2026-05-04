import React from 'react'

interface Props{
    title?: string,
    ariaActionLabel?: string,
    onClickFn?: ()=> void
}

function FilterSideBarHeader({title,ariaActionLabel,onClickFn}:Props) {
  return (
    <div className='flex flex-row justify-between items-end mt-2 mb-2 border-b pb-4 border-gray-300'>
        <h3 className='text-black/80 font-bold text-xl'>{title}</h3>
        <button onClick={onClickFn} className='text-blue-500 text-md cursor-pointer hover:underline underline-offset-2 font-bold'>{ariaActionLabel}</button>
    </div>
  )
}

export default FilterSideBarHeader