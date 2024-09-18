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
        name:"writings",
        path:"/writings",
    },
    {
        name:"links",
        path:"/links",
    },
    {
        name:"about",
        path:"/about",
    },
    {
        name:"Contact",
        path:"/contact",
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
