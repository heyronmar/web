import React from 'react';
import Link from "next/link";

const Footer = () => {
  
    const year = new Date().getFullYear();

  return (
    <div className='container flex flex-col py-6 gap-1 items-left px-0 font-light border-t border-t-zinc-200'>
        <div className='text-sm text-zinc-500'>Copyright © {year} - Created by Ronmar Lacamiento using <Link href={"https://nextjs.org/"} className='text-blue-600'>NextJS</Link> and <Link href={"https://tailwindcss.com/"} className='text-blue-600'>Tailwind CSS</Link>. Typeset is <Link href={"https://fonts.google.com/specimen/DM+Sans"} className='text-blue-600'>DM Sans</Link>.</div>
        <div className='text-sm text-zinc-500'>Made with 🖤🖤🖤 from Aotearoa.</div>
    </div>
  )
}

export default Footer