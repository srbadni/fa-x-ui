import React from 'react'
import Search from './Search'
import Tags from './Tags'
import Recommendation from './Recommendation'
import Link from 'next/link'

export default function LeftBar() {
  return (
    <div className='pt-4 flex flex-col gap-4 sticky top-0 h-max'>
      <Search />
      <Tags />
      <Recommendation />
      <div className='text-textGray text-sm flex gap-x-4 flex-wrap'>
        <Link href="/">شرایط استفاده</Link>
        <Link href="/">سیاست‌های مربوط به حریم شخصی</Link>
        <Link href="/">سیاست کوکی‌ها</Link>
        <Link href="/">دسترس‌پذیری</Link>
        <Link href="/">اطلاعات آگهی‌ها</Link>
        <Link href="/">بیشتر</Link>
        <span>© 2025 DevWithAlireza Corp</span>
      </div>
    </div>
  )
}
