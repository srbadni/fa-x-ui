import React from 'react'
import Image from './Image'

export default function Search() {
  return (
    <div className='bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full'>
        <Image path={"icons/explore.svg"} alt="" w={16} h={16} />
        <input type="text" placeholder='جستجو' className='bg-transparent outline-none placeholder:text-gray' />
    </div>
  )
}
