import React from 'react'
import Image from './Image'

export default function Recommendation() {
    return (
        <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
            {/* card کاربر */}
            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image path={"general/avatar.png"} alt="sarabadani" w={100} h={100} tr={true} />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>alireza sarabadani</h2>
                        <span className='text-textGray text-sm text-right'>@devwithalireza</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>
            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image path={"general/avatar.png"} alt="sarabadani" w={100} h={100} tr={true} />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>alireza sarabadani</h2>
                        <span className='text-textGray text-sm text-right'>@devwithalireza</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>
            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image path={"general/avatar.png"} alt="sarabadani" w={100} h={100} tr={true} />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>alireza sarabadani</h2>
                        <span className='text-textGray text-sm text-right'>@devwithalireza</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>
        </div>
    )
}
