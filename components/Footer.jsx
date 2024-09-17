import React from 'react';
import Link from "next/link";

const Footer = () => {
  
    const year = new Date().getFullYear();

  return (
    <div className='container flex flex-col py-6 gap-1 items-left px-0 font-light'>
        <div className='text-sm text-zinc-600'>Copyright © {year} - Created by Ronmar Lacamiento using <Link href={"https://nextjs.org/"}>NextJS</Link> and <Link href={"https://tailwindcss.com/"}>Tailwind CSS</Link>.</div>
        <div className='text-sm text-zinc-600'>Made with 🖤🖤🖤 from Aotearoa.</div>
    </div>
  )
}

export default Footer