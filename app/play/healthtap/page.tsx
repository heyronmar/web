import data from "@/app/data/case-data-sliced.json";
import React from 'react';
import Image from "next/image";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Health Tap",
    description: "Workshop Management Software",
};

export default function HealthTap() {
    return (
        <div className='container p-0 my-24 relative'>
            {data.map((work, index) => {
                
                    return <div key = {index} className='text-md font-light'>
                        {work.slug === "healthtap" ? 
                            <>
                            <h1 className="text-3xl tracking-normal flex flex-col mb-16 font-light first-letter:capitalize">
                                <span className='text-zinc-700'>{work.title}</span>
                                <span className='text-l font-extralight text-zinc-500'>{work.subtitle}</span>
                            </h1>

                            <div className="flex flex-row gap-2 my-6">
                                {work.tags.map((tag, index) => (
                                    <div key={index} className="text-md font-light py-0 px-4 bg-slate-100 border border-slate-300 text-slate-600 rounded-full first-letter:capitalize">{tag}</div>
                                ))}
                            </div>

                            <div className="relative w-full">
                                <Image 
                                    src={work.heroimgurl} 
                                    priority
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    quality={100}
                                    alt={work.title}
                                    className="rounded-lg overflow-clip"
                                />
                            </div>
                            
                            
                            {work.context ? 
                            <div className='my-16 w-10/12 mx-auto'>
                                <h2 className='text-2xl font-light text-zinc-800 pb-4'>Summary</h2>
                                <p className='leading-snug text-xl font-light text-zinc-600'>
                                    {work.context}
                                </p>
                            </div>
                            : null}

                            {work.problem ? 
                            <div className='my-16 w-10/12 mx-auto'>
                                <h2 className='text-2xl font-light text-zinc-800 pb-4'>Problem Statement</h2>
                                <p className='leading-snug text-xl font-light text-zinc-600'>
                                    {work.problem}
                                </p>
                            </div> 
                            : null}

                            {work.outcomes ? 
                            <div className='my-16 w-10/12 mx-auto'>
                                <h2 className='text-2xl font-light text-zinc-800 pb-4'>Solution</h2>
                                <p className='leading-snug text-xl font-light text-zinc-600'>
                                    {work.outcomes}
                                </p>
                            </div>
                            : null }  
                            
                            <div>
                                {work.screens.map((screen, index) => (
                                    <div key={index} className='flex flex-col'>
                                        <div className="relative w-full">
                                            <Image 
                                                src={screen.src} 
                                                priority
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", height: "auto" }}
                                                quality={100}
                                                alt={work.title}
                                                className="rounded-lg overflow-clip"
                                            />
                                        </div>
                                        <div className='mx-auto text-center text-sm text-zinc-400 my-2 leading-tight'>
                                            {screen.caption}
                                        </div>

                                        {screen.description ? <div className='my-16 w-10/12 mx-auto'>
                                            <p className='leading-snug text-xl font-light text-zinc-600 first-letter:capitalize'>
                                                {screen.description}
                                            </p> 
                                        </div> : <div className='my-16 w-10/12 mx-auto'></div>}
                                        
                                    </div>

                                ))}
                            </div>

                            <div className='my-10'>
                                <div className='xl:w-8/12 w-full mx-auto flex flex-row justify-between border-b border-zinc-300 pt-5 pb-4'>
                                    <div className="xl:w-8/12 w-6/12 leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                        <Link href={work.url} className='hover:text-blue-600' target='_blank'>{work.company} </Link>
                                    </div>
                        
                                    <div className="xl:w-4/12 w-6/12 leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                        {work.year}
                                    </div>
                                </div>
                                
                                <div className='xl:w-8/12 w-full mx-auto flex flex-row justify-between border-b border-zinc-300 py-4'>
                                    <div className="xl:w-8/12 w-6/12 leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                        Skills
                                    </div>
                                    <div className="xl:w-4/12 w-6/12 flex flex-col gap-3">
                                        {work.skills.map((skill, index) => (
                                            <div key={index} className="leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                    
                                </div>

                                <div className='xl:w-8/12 w-full mx-auto flex flex-row justify-between py-4'>
                                    <div className="xl:w-8/12 w-6/12 leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                        Team
                                    </div>
                                    <div className="xl:w-4/12 w-6/12 flex flex-col gap-3">
                                        {work.team.map((member, index) => (
                                            <div key={index} className="leading-snug text-lg font-light text-zinc-600 first-letter:capitalize">
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                            
                            </>
                        : null }
                    </div> 
            })}
            

        </div>
    );
}