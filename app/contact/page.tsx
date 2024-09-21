import React from 'react'
import Link from 'next/link';
import dataLinks from "@/app/data/contact-data.json";
import { FaLinkedin, FaMedium, FaGithub, FaGlobe, FaMailBulk, FaCameraRetro, FaGlobeAsia } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='container xl:p-0 my-16'>
      <h1 className="text-3xl tracking-normal flex flex-col mb-16 font-extralight first-letter:capitalize">
          <span className='text-zinc-700'>Contacts</span>
      </h1>
      {/* { LINKS } */}
      <div className='my-8'>
        <div className='text-lg text-zinc-700 py-4'>Give me a shout, or let&lsquo;s connect.</div>
        {dataLinks.map((dataLink, index)=>{
            return <div key={index} className='my-2 w-6/12'>
                      <Link href={dataLink.url} className="text-zinc-600 hover:text-blue-600 text-md flex items-center gap-3" target="_blank">
                          {dataLink.icon ==="FaLinkedin" ? <div><FaLinkedin /></div> : dataLink.icon ==="FaMedium" ? <div><FaMedium /></div> : dataLink.icon ==="FaGithub" ? <div><FaGithub /></div> : dataLink.icon ==="FaGlobe" ? <div><FaGlobeAsia /></div> : dataLink.icon ==="FaMailBulk" ? <div><FaMailBulk /></div> : dataLink.icon ==="FaGlobe" ? <div><FaGlobe /></div> : dataLink.icon ==="FaCameraRetro" ? <div><FaCameraRetro /></div> : <></>}
                          <div className="font-light text-zinc-600  hover:text-blue-600 leading-snug tracking-normal first-letter:capitalize">
                            {dataLink.title}
                          </div>
                      </Link> 
                    </div>
                  
        })}
      </div>

    </div>
  )
}

export default ContactPage
