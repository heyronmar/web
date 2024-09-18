import React from 'react';
import data from "@/app/data/about-data.json";
import Link from "next/link";

const AboutPage = () => {

  // Sort the data outside the map function
  const sortedData = data.sort((a, b) => Number(a.key) - Number(b.key));

  return (
    <div className='container p-0 my-16'>
        <div className='flex flex-col'>
          <div className='xl:max-w-[80%] py-8'>
            <h1 className='text-3xl font-extralight text-zinc-600 leading-snug tracking-wide pb-6'>
              <span className='text-zinc-700'>I’m a digital designer with a huge passion for human-computer interaction</span>. I have an extensive experience in <span className='underline decoration-blue-300 '>UX</span>, <span className='underline decoration-blue-300 '>mobile app & web design</span>, <span className='underline decoration-blue-300 '>design systems</span>, <span className='underline decoration-blue-300 '>research & testing</span>, <span className='underline decoration-blue-300 '>product strategy</span>, <span className='underline decoration-blue-300 '>product management</span>, <span className='underline decoration-blue-300 '>design and engineering</span>. <span className='text-zinc-700'>My goal is to design solutions that bring <span className='bg-teal-200'>delightful experiences to users</span> while meeting <span className='bg-teal-200'>business requirements</span>.</span>
            </h1>
            <div>
              <Link href={""} className="text-zinc-600 hover:text-blue-600 text-l flex items-center gap-2 py-8" target="_blank">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                  </svg>

                  </div>
                  <div className="text-2xl font-light text-zinc-600  hover:text-blue-600 leading-snug tracking-normal">Download a copy of my CV</div>
                </Link>
            </div>
          </div>
          
          <div className='py-2'>
            { sortedData.map((exp)=>{
                return (
                  <div key={exp.key} className='py-1'>
                    <div className={`flex xl:flex-row lg:flex-row flex-col text-md font-light object-left ${exp.title === "spacer" ? 'border-t border-b-zinc-200 my-6 max-h-1' : ''}`}>
                        {exp.title == null || exp.title =="spacer" ? <div className='grow xl:w-2/12 w-full font-normal text-zinc-500 opacity-0 hidden xl:block lg:block'>{exp.title}</div> : <div className='grow xl:w-2/12 w-full font-normal text-zinc-500'>{exp.title}</div>}
                        <div className='grow xl:w-2/12 w-full text-zinc-500'>{exp.year}</div>
                        <div className='grow xl:w-2/12 w-full'>{exp.org}</div>
                        <div className='grow xl:w-6/12 w-full xl:text-right lg:text-right'>{exp.role}</div>
                      </div>
                  </div>
                )
            })}
          </div>
          
        </div>
    </div>
  )
}

export default AboutPage
