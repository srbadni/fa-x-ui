"use client"

import React from 'react'
import Image from "@/components/Image"
import { useRouter } from 'next/navigation'

export default function PostModal() {
    const router = useRouter();

    const closeModal = () => {
        router.back();
    }

    return (
        <div className='absolute w-full h-screen top-0 right-0 z-20 bg-[#293139a6] flex justify-center'>
            <div className='py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12'>
                {/* بالا */}
                <div className='flex items-center justify-between'>
                    <div className='cursor-pointer' onClick={closeModal}>X</div>
                    <div className='text-iconBlue font-bold'>پیش نویس ها</div>
                </div>
                {/* محتوا */}
                <div className='py-8 flex gap-4'>
                    {/* لوگو */}
                    <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                        <Image path={"general/avatar.png"} alt="devwithalireza" w={100} h={100} tr={true} />
                    </div>
                    <input className='flex-1 bg-transparent outline-none text-lg' type="text" placeholder='چه خبر؟!' />
                </div>
                {/* فوتر */}
                <div className='flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4'>
                    <div className='flex gap-4 flex-wrap'>
                        <Image path='icons/image.svg' alt="" w={20} h={20} className='cursor-pointer' />
                        <Image path='icons/poll.svg' alt="" w={20} h={20} className='cursor-pointer' />
                        <Image path='icons/emoji.svg' alt="" w={20} h={20} className='cursor-pointer' />
                        <Image path='icons/schedule.svg' alt="" w={20} h={20} className='cursor-pointer' />
                        <Image path='icons/location.svg' alt="" w={20} h={20} className='cursor-pointer' />
                    </div>
                    <button className='py-2 px-5 text-black bg-white rounded-full font-bold'>پست کردن</button>
                </div>
            </div>
        </div>
    )
}
