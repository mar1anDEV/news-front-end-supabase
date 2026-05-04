import React from 'react'


interface Props {
    title: string,
    defaultOptionCity: string,
    location:{
        id: number,
        name: string,
        region: string
    }[]
}

function FilterLocation({title, location,defaultOptionCity}: Props) {
  return (
    <div className='flex flex-col gap-2 mt-6'>
        <h3 className='text-gray-700 font-bold text-lg'>{title}</h3>
        <div className='select border border-gray-300 px-2 py-1 mx-1 rounded'>
            <select className='w-full outline-0 border-0 font-bold text-md text-gray-500'>
                <option value="">{defaultOptionCity}</option>

                {location.map((city) => (
                    <option key={city.id} value={city.name}>
                    {city.name}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default FilterLocation