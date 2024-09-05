"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [

    {
        name:"work",
        path:"/",
    },
    {
        name:"play",
        path:"/play",
    },
    {
        name:"about",
        path:"/about",
    },
    {
        name:"resume",
        path:"/resume",
    },

];


const Nav = () => {

    const pathname = usePathname();
    //console.log(pathname);

  return (
    <nav className="text-lg flex gap-8 capitalize font-normal">
        {links.map((link, index)=>{
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}`}>
                {link.name}
            </Link>
        })}
    </nav>
  )
}

export default Nav
