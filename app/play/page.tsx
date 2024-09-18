import React from 'react';
import ShowcasePanel from "@/components/Showcase";

const PlayPage = () => {
  return (
    <><div className="container flex-row mx-auto text-wrap justify-start pt-24 pb-12 px-3 ">
      <h1 className="text-3xl tracking-normal flex mb-4 font-light">
        <span>Hello, Im Ronmar.</span>
      </h1>
      <p className="text-5xl tracking-normal flex mb-2 font-light">
        <span>I <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-50%  via-sky-600  to-teal-600 selection:text-cinder-400"> love exploring</span> visual patterns and technology. <br className='hidden xl:block'/><span>Outside work, I enjoy <span className="text-gray-700 bg-sky-200">food, music & outdoors</span>.
        </span>
        </span>
      </p>
    
    </div><ShowcasePanel num="2" /></>
  )
}

export default PlayPage

