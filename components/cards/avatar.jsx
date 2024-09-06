import Image from 'next/image'
import React from 'react'

function Avatar() {
  return (
    <div className='w-12 overflow-hidden rounded-full'>
        <Image src='/assets/3.jpg'
            width={48}
            height={48}
            className=' object-contain   '
        /> 
    </div>
  )
}

export default Avatar