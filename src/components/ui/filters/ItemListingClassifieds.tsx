import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'


interface Props{
    idItem?:string,
    icon?: IconDefinition,
    itemName?: string,
    isActive?: string,
    onClick: ()=> void
}

function ItemListingClassifieds({icon,itemName,idItem,isActive, onClick}:Props) {

    
//console.log(typeof(isActive))



  return (
    <div className="item cursor-pointer" id={`${idItem}`}>
        <div onClick={onClick} className={`group hover:bg-blue-100 flex items-center gap-3 mt-2 py-2 px-1 rounded-lg transition-all duration-300 ${isActive === idItem ? 'bg-blue-100 text-blue-600':''}`}>
        <div className='font'>
            {icon && <FontAwesomeIcon className={`group-hover:text-blue-700 ${isActive === idItem ? 'text-blue-700': 'text-gray-700'}`} icon={icon} />}
        </div>
        <div className="info">
            <p className={`font-bold group-hover:text-blue-700 ${isActive === idItem ? 'text-blue-700': 'text-gray-700'}`}>{itemName}</p>
        </div>
    </div>
    </div>
  )
}

export default ItemListingClassifieds