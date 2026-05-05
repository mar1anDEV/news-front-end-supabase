import React from 'react'
import MUIPagination from '../../ui/pagination/MUIPagination'
function ListingPanel({ children }: { children?: React.ReactNode }) {
  return (
    <main className='min-w-0 space-y-4 h-full border border-gray-300 rounded w-full'>
        <div className='flex flex-col justify-between h-full p-4'>
            <div className='children'>
                {children}
            </div>
        
        <MUIPagination/>
        </div>
    </main>
  )
}

export default ListingPanel