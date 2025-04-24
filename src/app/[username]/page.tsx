import Feed from '@/components/Feed'
import Image from '@/components/Image'
import Link from 'next/link'
import React from 'react'

export default function UserPage() {
    return (
        <div>
            {/* عنوان پروفایل */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href="/">
                    <Image className='rotate-180' path="icons/back.svg" alt="بازگشت" w={24} h={24} />
                </Link>
                <h1 className='font-bold text-lg'>
                    Alireza Sarabadani
                </h1>
            </div>
            {/* اطلاعات */}
            <div>
                {/* بخش آواتار و کاور */}
                <div className='relative w-full'>
                    {/* کاور */}
                    <div className='w-full aspect-[3/1] relative'>
                        <Image path="general/cover.jpg" w={600} h={200} alt="" tr={true} />
                    </div>
                    {/* لوگو یا آواتار */}
                    <div className='w-1/5 aspect-square absolute rounded-full overflow-hidden border-4 border-black bg-gray-300 right-4 -translate-y-1/2'>
                        <Image path="general/avatar.png" w={100} h={100} alt="" tr={true} />
                    </div>
                </div>
                <div className='flex w-100 items-center justify-end gap-2 p-2'>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image path='icons/more.svg' alt="" w={20} h={20} />
                    </div>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image path='icons/explore.svg' alt="" w={20} h={20} />
                    </div>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image path='icons/message.svg' alt="" w={20} h={20} />
                    </div>
                    <button className='py-2 px-4 bg-white text-black font-bold rounded-full'>دنبال کردن</button>
                </div>
                {/* اطلاعات کاربر */}
                <div className='p-4 flex flex-col gap-2'>
                    {/* نام و کاربری و ایدی */}
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-2xl text-right font-bold'>Alireza Sarabadani</h2>
                        <span className='text-sm text-right text-textGray'>@devwithalireza</span>
                    </div>
                    <p>
                        Alireza Sarabadani Youtube Channel
                    </p>
                    {/* شغل موقعیت مکانی تاریخ */}
                    <div className='flex gap-4 text-textGray text-[15px]'>
                        <div className='flex items-center gap-2'>
                            <Image path='icons/userLocation.svg' alt="" w={20} h={20} />
                            <span>IRAN</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image path='icons/date.svg' alt="" w={20} h={20} />
                            <span>تاریخ پیوستن 21 آوریل</span>
                        </div>
                    </div>
                    {/* امار دنبال شوندگان و دنبال کنندگان */}
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-2'>
                            <span className='font-bold'>100</span>
                            <span className='text-textGray text-[15px]'>دنبال کنندگان</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='font-bold'>100</span>
                            <span className='text-textGray text-[15px]'>دنبال شوندگان</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* فید */}
            <Feed />
        </div>
    )
}
