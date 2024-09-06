import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white min-w-fit shadow-md shadow-red-500 rounded-md p-4 mb-5'>
        {children}
    </div>
  )
}

export default Card