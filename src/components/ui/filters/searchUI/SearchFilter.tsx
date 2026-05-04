import React from 'react'

interface Props{
    value?: string,
    onChangeFn?: ()=> void,
    placeholder?: string
}


function SearchFilter({value}:Props) {
  return (
    
        <div className='flex flex-col'>
            <div className='label'>
                <h4 className='text-black font-bold text-md'>Search</h4>
            </div>
            <div className='mt-4 InputContainer h-10 w-full flex items-center justify-between px-3  rounded overflow-hidden shadow border border-gray-300'>
                    <input className='input h-full w-full border-0 outline-0 text-[1rem] relative' 
                    value={value} 
                    placeholder={'Search..'} 
                    type="text" />
                    
                    <label htmlFor="inputSearch">
                        <svg className="searchIcon w-4" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">

                            </path>
                        </svg>
                    </label>
                </div>
        </div>
  )
}

export default SearchFilter