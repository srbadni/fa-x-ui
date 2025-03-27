import React from 'react'
import Image from './Image'

export default function Tags() {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
        <h2 className='text-xl font-bold text-textGrayLight'>چیزهایی که دارد رخ می‌دهد</h2>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>جاوااسکریپت</span>
                <Image path="icons/infoMore.svg" alt="" w={16} h={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>react js</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>جاوااسکریپت</span>
                <Image path="icons/infoMore.svg" alt="" w={16} h={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>react js</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>جاوااسکریپت</span>
                <Image path="icons/infoMore.svg" alt="" w={16} h={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>react js</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>جاوااسکریپت</span>
                <Image path="icons/infoMore.svg" alt="" w={16} h={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>react js</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>
    </div>
  )
}
