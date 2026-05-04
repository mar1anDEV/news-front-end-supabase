import React from 'react'
import BtnClassifieds from '../../ui/buttons/BtnClassifieds'

interface Props{
    children?: React.ReactNode,
    title?: string,
    description?: string,
    actionLabel?: string,
    hasIcon?: boolean,
    hasButton?: boolean,
    path: string
}


function PageHeader({title,description,actionLabel,children,path,hasButton,hasIcon}:Props) {
  return (
    <header className={`p-3 bg-gray-300 h-auto ${actionLabel && hasButton ? 'flex flex-wrap justify-between items-center':''}`}>
        <div className='flex flex-col'>
            <h3 className='text-blue-900 font-bold text-2xl'>{title}</h3>
            <p className='text-sm text-gray-500 font-bold mt-1'>{description}</p>
        </div>
        {children}
        {hasButton && hasButton && (
            <BtnClassifieds
        actionLabel={actionLabel}
        path={path}
        addBtn={hasIcon}
        />
        )}
    </header>
  )
} 

export default PageHeader