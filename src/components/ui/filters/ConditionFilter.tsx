import React from 'react'


interface Props {
    title: string,
    conditions : {
        id : string,
        name: string
    }[]
}

function ConditionFilter({title,conditions}:Props) {
  return (
    <div className='flex flex-col'>
        <div className='title'>
            <h3 className='text-gray-800 font-bold text-lg'>
                {title}
            </h3>
        </div>
        <div className='flex flex-col mt-2'>
            {conditions.map((condition)=>(
                <div className='flex flex-wrap' key={condition.id}>
                    <label htmlFor="checkbox">
                        <input type="checkbox" className='w-full outline-gray-300' name="checkbox" id={condition.id} />
                    </label>
                    <div className='checkbox-name ml-2'>
                        <p className='text-gray-600 font-bold text-md'>{condition.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ConditionFilter