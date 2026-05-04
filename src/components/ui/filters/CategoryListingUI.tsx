import React from 'react'
import ItemListingClassifieds from './ItemListingClassifieds'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface Props{
    title? : string,
    activeItem?: boolean,
    onItemClick?: (id: string)=> void,
    listing? : {
      id?: string,
      name?: string,
      icon?: IconDefinition,
      description?: string,
      count?: number
    }[]
}

function CategoryListingUI({title,listing,onItemClick}: Props) {
  return (
    <div className='flex flex-col gap-2 mt-2'>
        <div className='aria-title'><h4 className='text-black font-bold text-md'>{title}</h4></div>
        <div className='flex-flex-col'>
          {listing?.map((item)=>(
            <ItemListingClassifieds  onClick={()=> item?.id && onItemClick?.(item.id)}  idItem={item.id} icon={item.icon} itemName={item.name} key={item.id} />
          ))}
        </div>
    </div>
  )
}

export default CategoryListingUI