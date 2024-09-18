import React from 'react';
import data from "@/app/data/about-data.json";

const AboutPage = () => {

  // Sort the data outside the map function
  const sortedData = data.sort((a, b) => Number(a.key) - Number(b.key));

  return (
    <div className='container p-0 my-16'>
        <div className='flex flex-col'>
          <div className='xl:max-w-[80%] py-8'>
            <h1 className='text-3xl font-extralight text-zinc-600 leading-snug tracking-wide pb-6'>
              <span className='text-zinc-700'>I’m a digital designer with a huge passion in human-computer interaction</span>. I have done a bit of everything from UX, mobile app & web design, design systems, research & testing, product strategy, product management, design and engineering. <span className='text-zinc-700'>My goal is to design solutions that brings <span className='underline decoration-blue-300'>delightful experience to users</span> & meet <span className='underline decoration-blue-300'>business requirements</span>.</span>
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
