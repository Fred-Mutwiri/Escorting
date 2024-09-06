import React from 'react'

function Pcard({children}) {
  return (
    <div className='bg-white min-w-fit shadow-sm shadow-red-500 rounded-md p-0 mb-5'>
        {children}
    </div>
  )
}

export default Pcard;