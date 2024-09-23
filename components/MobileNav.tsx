"use client"

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import DiscoverNZ from '@/app/play/discover-nz/page';

const links = [

    {
        name:"work",
        path:"/",
    },
    {
        name:"play",
        path:"/play",
    },
    // {
    //     name:"writings",
    //     path:"/writings",
    // },
    {
        name:"about",
        path:"/about",
    },
    {
        name:"Useful links",
        path:"/links",
    },
    {
        name:"Contact",
        path:"/contact",
    },
    

];

function MobileNav() {
    const pathname = usePathname();
    const year = new Date().getFullYear();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                Menu
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div>
                    <Link href={"/"} className='text-2xl first-letter:capitalize my-3'>
                        Ronmar
                    </Link>
                </div>
                <div className='flex flex-col '>
                    {links.map((link, index)=>{
                        return <>
                            <Link href={link.path} className='text-2xl first-letter:capitalize my-3 hover:text-blue-600 leading-'>
                                {link.name}
                            </Link>
                        </>
                    })}
                </div>
                <div className='mt-4 pt-8 font-light border-t border-t-zinc-200'>
                    <div className='text-sm text-zinc-500'>Copyright © {year} - Created by Ronmar Lacamiento using <Link href={"https://nextjs.org/"} className='text-blue-600'>NextJS</Link> and <Link href={"https://tailwindcss.com/"} className='text-blue-600'>Tailwind CSS</Link>. Typeset is <Link href={"https://fonts.google.com/specimen/DM+Sans"} className='text-blue-600'>DM Sans</Link>.</div>
                    <div className='text-sm text-zinc-500'>Made with 🖤🖤🖤 from Aotearoa.</div>
                </div>
               
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
