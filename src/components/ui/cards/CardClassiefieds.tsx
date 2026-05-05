import React from 'react'
import { Heart, Camera,MapPin } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
interface Props{
    id?: string,
    icon: IconDefinition,
    imgSrc?: string,
    name?: string,
    category?: string,
    pubTime?: string,
    shortDescription?: string,
    price?: number,
    location?: string
}


function CardClassiefieds({id,imgSrc,name,category,shortDescription,price,location,icon}:Props) {
  return (
    <div id={id} className="gap-2 cursor-pointer rounded-xl p-3 bg-white mt-4">

  <div className="flex flex-col xl:flex-row gap-2 p-2">

    <div className="w-full xl:w-70 h-40 rounded-lg overflow-hidden relative group shadow">

      {/* Image */}
      <img
        src={imgSrc}
        alt=""
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Heart (top-right) */}
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Heart className="w-5 h-5 text-gray-500" />
      </button>

      {/* Camera (bottom-left) */}
      <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-md">
        <Camera className="w-4 h-4 text-white" />
      </div>

    </div>

    <div className='flex flex-col md:ml-2'>
      <h3 className='text-blue-900 font-bold text-xl'>{name}</h3>
      <div className='flex flex-row items-center gap-2 py-2'>
          <div className='flex flex-row items-center'>
            <FontAwesomeIcon icon={icon} className='text-sm text-gray-500'/>
            <p className='text-gray-500 text-sm font-bold ml-2'>{category}</p>
          </div>
          <span className='bg-gray-500 p-0.5 rounded-full'></span>
          <p className='text-gray-500 text-sm font-bold '>2 hours ago</p>
      </div>
      <div className='description'><p className='description text-gray-500 text-sm font-bold'>{shortDescription}</p></div>
      <div className='price'><p className='price text-blue-600 text-xl font-bold mt-2'>{price} €</p></div>
      <div className='flex flex-row mt-2'>
        <div className='flex flex-row'>
          <div className='icon'><MapPin className='w-5 h-5 text-gray-500'/></div>
          <div className="location"><p className='text-gray-500 text-sm font-bold ml-2'>{location}</p></div>
        </div>
      </div>
    </div>

  </div>

</div>
  )
}

export default CardClassiefieds