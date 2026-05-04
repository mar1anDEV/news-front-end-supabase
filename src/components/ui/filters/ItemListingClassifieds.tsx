import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props{
    idItem?:string,
    icon?: string,
    itemName?: string,
}

function ItemListingClassifieds({icon,itemName,idItem}:Props) {
  return (
    <div className="item" id={idItem}>
        <div className='flex items-center gap-3 mt-4'>
        <div className='font'>
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className="info">
            <p className='font-medium text-black/80'>{itemName}</p>
        </div>
    </div>
    </div>
  )
}

export default ItemListingClassifieds