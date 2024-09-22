import Link from "next/link";
import Image from "next/image";
import data from "@/app/data/data-sliced.json";

export async function ShowcasePanel({ num }: { num: string }) {
    // Filter the data to only include items where num matches the passed prop
    const filteredData = data.filter(casestudy => casestudy.num === num);
    
return (
    <div>
        {filteredData.map((casestudy, index) => {
            return (
            <div key={index} className="container p-0 bg-white flex xl:flex-row lg:flex-row flex-col-reverse xl:my-16 my-8 rounded-xl  overflow-clip">
                <div className="hidden">{casestudy.num}</div>
                <div className="flex-1 p-12">
                    {/* CONTENT HERE */}
                    <div className="flex flex-col h-full">
                        {/* BRAND HERE */}
                        <div className="grow h-full">
                            <div className="flex flex-row items-center gap-2 pb-8">

                                <div className="w-6 h-6 relative">
                                    <Image 
                                        src={casestudy.logoSrc} 
                                        priority
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                        quality={100}
                                        alt={casestudy.logoAlt}
                                        className="rounded-full overflow-clip" 
                                    />
                                </div>
                                <div className="relative first-letter:capitalize">
                                    {casestudy.logoAlt} {casestudy.caseDate ? <span className="text-zinc-400 font-light"> - {casestudy.caseDate}</span> : null}
                                </div>
                            </div>
                            {/* COPY HERE */}
                            <div className=" text-2xl pb-4">
                                {casestudy.caseTitle}
                            </div>
                            <div className="tracking-normal leading-snug font-light text-xl">
                                <p className="text-gray-600">{casestudy.caseDesc}<span className=" font-medium text-blue-600">{casestudy.caseRole}</span>{casestudy.caseValue}</p>
                            </div>
                        </div>
                        <div className="pt-8">
                            <Link href={casestudy.linkHref} className="text-blue-600 text-l flex items-center gap-2">
                                <div className="font-medium">{casestudy.linkText}</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full relative min-h-96"> 
                        <div className="">
                            <Image 
                                src={casestudy.coverImageSrc}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                quality={100}
                                alt={casestudy.coverImageAlt}
                                className="overflow-hidden object-cover object-top" 
                                />
                        </div>
                    </div>
                </div>
            </div> 
            
            )
        })}
    </div>
    
)
}

export default ShowcasePanel;


