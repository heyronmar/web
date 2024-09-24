import React from 'react';
import data from "@/app/data/about-data.json";
import Link from "next/link";

const AboutPage = () => {

  // Sort the data outside the map function
  const sortedData = data.sort((a, b) => Number(a.key) - Number(b.key));

  return (
    <div className='container xl:p-0 my-16'>
        <div className='flex flex-col'>
          <div className='xl:max-w-[80%] py-8'>
            <h1 className='text-3xl font-extralight text-zinc-600 leading-snug tracking-wide pb-6'>
              <span className='text-zinc-700'>I’m a digital designer obsessed with human-computer interaction</span>. I have a wide experience in <span className='underline decoration-blue-300 '>UX</span>, <span className='underline decoration-blue-300 '>mobile app & web design</span>, <span className='underline decoration-blue-300 '>design systems</span>, <span className='underline decoration-blue-300 '>research & testing</span>, <span className='underline decoration-blue-300 '>product strategy</span>, <span className='underline decoration-blue-300 '>product management</span>, <span className='underline decoration-blue-300 '>design and engineering</span>. <span className='text-zinc-700'>My goal is to design solutions that bring <span className='bg-teal-200'>delightful experiences to users</span> while meeting <span className='bg-teal-200'>business requirements</span>. </span><Link href={"./assets/2024 CV Ronmar Lacamiento-min.pdf"} className="text-zinc-600 hover:text-blue-600" target="_blank">You can download my cv here</Link>
            </h1>
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
