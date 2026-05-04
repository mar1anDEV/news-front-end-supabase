import React from 'react'
import MUIPagination from '../ui/pagination/MUIPagination'
interface Props{
    type?: string
}
function Listing({type}:Props) {
  return (
    <div key={type}>
        <MUIPagination/>
    </div>
  )
}

export default Listing