import React from 'react'


    interface Props {
        children: React.ReactNode
    }

function NewsLayout({children}:Props) {
  return (
    <div className='xl:container mt-2 py-4'>
        <div className='flex flex-col gap-3 xl:p-4'>
            {children}
        </div>
    </div>
  )
}

export default NewsLayout