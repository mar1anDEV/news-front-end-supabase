import React from 'react'
import PriceRange from './RangeFilter'
interface Props{
    title: string,
    range: number
}

function PriceRangeFilter({title}:Props) {

    const minValue = 0;
    
    const maxValue = 20000;

    const selectedValue = 2000;


  return (
    <div className='flex flex-col mt-2'>
        <div className='title'><h3 className='text-gray-900 text-lg font-bold'>{title}</h3></div>

    <div className='flex flex-col mt-4'>
        <div className="inputs flex flex-row gap-x-2 w-full">
            <div className='h-10 rounded-lg border p-2 border-gray-300'>
                        <label htmlFor="inputMin">
                        <input type="text" placeholder='Min price' className='font-bold w-full h-full outline-0 border-0' name="" id="inputMin" />
                    </label>
            </div>
            
            <div className='h-10 rounded-lg border p-2  border-gray-300'>
                <label htmlFor="inputMax">
                        <input type="text" placeholder='Max price' className='font-bold w-full h-full outline-0 border-0' name="" id="inputMax" />
                    </label>
            </div>
        </div>
        <div className="range mx-2">
            <PriceRange minValue={minValue} maxValue={maxValue} defaultValue={selectedValue}/>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-gray-500 font-bold text-md'>{minValue}</p>
                <p className='text-gray-500 font-bold text-md'>{maxValue}$</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default PriceRangeFilter