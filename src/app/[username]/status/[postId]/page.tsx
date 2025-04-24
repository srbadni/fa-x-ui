import Comments from "@/components/Comments";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";
import React from "react";

const StatusPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
            <Image className='rotate-180' path="icons/back.svg" alt="بازگشت" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">پست</h1>
      </div>
      <Post type="status"/>
      <Comments/>
    </div>
  );
};

export default StatusPage;
