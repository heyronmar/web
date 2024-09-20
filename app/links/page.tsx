import React from 'react'
import Link from 'next/link';
import dataLinks from "@/app/data/links-data.json";

const LinksPage = () => {

  let categoryTitle = "";

  return (
    <div className='container xl:p-0 my-16'>
      <h1 className="text-3xl tracking-normal flex flex-col mb-16 font-extralight first-letter:capitalize">
          <span className='text-zinc-700'>Links</span>
      </h1>
      {/* { LINKS } */}
      <div className='my-8'>
        <div className='text-lg text-zinc-700 py-4'>Useful Resources</div>
        {dataLinks.map((dataLink, index)=>{
            return <>
                {dataLink.cat === 3 ?
                <div key={index} className='my-2 w-6/12'>
                  <Link href={dataLink.url} className="text-zinc-600 hover:text-blue-600 text-md flex items-center gap-4" target="_blank">
                      {dataLink.iconleft === true ? 
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                        </svg>
                      </div> 
                      : <></>}
                      <div className="font-light text-zinc-600  hover:text-blue-600 leading-snug tracking-normal first-letter:capitalize">
                        {dataLink.title}
                      </div>
                      {dataLink.iconright === true ? 
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      : <></>}
                  </Link> 
                </div>
                : <></> }
                  </>
        })}
      </div>
      {/* { WRITINGS } */}
      <div className='my-8 py-4 border-t border-zinc-200'>
        <div className='text-lg text-zinc-700 py-4'>Writings</div>
        {dataLinks.map((dataLink, index)=>{
            return <>
                {dataLink.cat === 1 ?
                <div key={index} className='my-3 xl:"w-6/12 w-full'>
                  <Link href={dataLink.url} className="text-zinc-600 hover:text-blue-600 text-md flex object-top gap-4" target="_blank">
                      {dataLink.iconleft === true ? 
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                        </svg>
                        </div> 
                      : <></>}
                      <div className="font-light text-zinc-600  hover:text-blue-600 leading-snug tracking-normal first-letter:capitalize">
                        {dataLink.title}
                      </div>
                      {dataLink.iconright === true ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      : <></>}
                  </Link> 
                  <span className='text-zinc-400 font-light text-sm'>{dataLink.date}</span>
                </div>
                : <></> }
                  </>
        })}
      </div>
      {/* { DISSECTIONS } */}
      <div className='my-8 py-4 border-t border-zinc-200'>
        <div className='text-lg text-zinc-700 py-4'>App Dissections</div>
        {dataLinks.map((dataLink, index)=>{
            return <>
                {dataLink.cat === 2 ?
                <div key={index} className='my-2 w-6/12'>
                  <Link href={dataLink.url} className="text-zinc-600 hover:text-blue-600 text-md flex items-center gap-4" target="_blank">
                      {dataLink.iconleft === true ? 
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                        </svg>
                      </div> 
                      : <></>}
                      <div className="font-light text-zinc-600  hover:text-blue-600 leading-snug tracking-normal first-letter:capitalize">
                        {dataLink.title}
                      </div>
                      {dataLink.iconright === true ? 
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      : <></>}
                  </Link>
                  <span className='text-zinc-400 font-light text-sm'>{dataLink.date}</span> 
                </div>
                : <></> }
                  </>
        })}
      </div>




    </div>

  )
}

export default LinksPage
