import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'


interface Props{
    idItem?:string,
    icon?: IconDefinition,
    itemName?: string,
}

function ItemListingClassifieds({icon,itemName,idItem}:Props) {

    


  return (
    <div className="item cursor-pointer" id={idItem}>
        <div className='flex items-center gap-3 mt-4'>
        <div className='font'>
            {icon && <FontAwesomeIcon className='' icon={icon} />}
        </div>
        <div className="info">
            <p className='font-medium text-black/80'>{itemName}</p>
        </div>
    </div>
    </div>
  )
}

export default ItemListingClassifieds