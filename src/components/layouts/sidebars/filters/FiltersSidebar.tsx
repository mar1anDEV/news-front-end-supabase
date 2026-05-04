import React from 'react'
interface Props{
  children?: React.ReactNode
  title ?: string,
  fnAction ?: ()=> void
}
function FiltersSidebar({children,title, fnAction}:Props) {
  return (
    <aside className='rounded border border-gray-300 p-2'>
      <div className='flex flex-col gap-4'>
        {children}
      </div>
    </aside>
  )
}

export default FiltersSidebar