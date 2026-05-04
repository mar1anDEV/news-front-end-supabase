import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'


interface Props{
    idItem?:string,
    icon?: IconDefinition,
    itemName?: string,
    isActive : string,
    onClick: ()=> void
}

function ItemListingClassifieds({icon,itemName,idItem,isActive, onClick}:Props) {

    
//console.log(typeof(isActive))

console.log(typeof(idItem))

  return (
    <div className="item cursor-pointer" id={`${idItem}`}>
        <div onClick={onClick} className={`flex items-center gap-3 mt-4 py-2 px-1 rounded-lg ${isActive === idItem ? 'bg-blue-50 text-blue-600 border border-blue-100':''}`}>
        <div className='font'>
            {icon && <FontAwesomeIcon className={isActive === idItem ? 'text-blue-700': 'text-gray-700'} icon={icon} />}
        </div>
        <div className="info">
            <p className={`font-bold ${isActive === idItem ? 'text-blue-700': 'text-gray-700'}`}>{itemName}</p>
        </div>
    </div>
    </div>
  )
}

export default ItemListingClassifieds