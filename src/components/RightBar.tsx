import Link from 'next/link'
import React from 'react'
import Image from "@/components/Image";

const menuList = [
  {
    id: 1,
    name: "خانه",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "کاوش",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "آگاه‌سازی‌ها",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "پیام‌ها",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "نشانک‌ها",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "شغل‌ها",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "انجمن‌ها",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "نمایه",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "بیشتر",
    link: "/",
    icon: "more.svg",
  },
];

export default function RightBar() {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      {/* لوگو منو دکمه */}
      <div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
        {/* لوگو */}
        <Link className='p-2 rounded-full hover:bg-[#141414]' href="/">
          <Image path={"icons/logo.svg"} alt="لوگوی X" w={24} h={24} />
        </Link>
        {/* لیست منو */}
        <div className='flex flex-col gap-4'>
          {
            menuList.map(item => {
              return <Link className='flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]' href={item.link} key={item.id}>
                <Image path={`icons/${item.icon}`} alt={item.name} w={24} h={24} />
                <span className='hidden xxl:inline'>{item.name}</span>
              </Link>
            })
          }
        </div>
        {/* دکمه */}
        <Link className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden' href="/compose/post" >
          <Image path="icons/post.svg" alt="پست جدید" w={24} h={24} />
        </Link>
        <Link className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20' href={"/compose/post"}>
          پست کردن
        </Link>
      </div>
      {/* اطلاعات حساب */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            <Image path="/general/avatar.png" alt='alireza sarabadani' w={100} h={100} tr={true} />
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Alireza Sarabadani</span>
            <span className='text-textGray'>@devwithalireza</span>
          </div>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
      </div>
    </div>
  )
}
