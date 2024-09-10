
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { CasePhoto, CaseLogo } from "@/components/Photos";

const ShowcasePanel = () => {
    

  return (
    <div className="container px-0 flex mx-auto bg-white border-gray-100 rounded-xl my-10">
        <div className="flex-initial w-5/12">
            <div className=" flex-row justify-between py-16 pl-8">
                
                <>{/*Brand*/}</>
                <div className="flex gap-2 pb-12">
                    <div className="inline-block max-w-8 max-h-8 bg-blue-500 rounded-full">
                        <CaseLogo/>
                    </div>
                    <span className="inline-block text-xl">Medenterprises</span>
                </div>
                
                <>{/*Teaser description*/}</>
                <div className="flex flex-col flex-wrap">
                    <div className="text-2xl tracking-normal font-medium">
                        <h2>Clinician’s companion</h2>
                    </div>
                    <div className="text-xl text-gray-800 leading-snug font-light mt-1">
                        <p>Designing a mobile app for healthcare providers and to make their work easier</p>
                    </div>
                    <div className="mt-2 mb-20">
                        <span className={badgeVariants({ variant: "outline" }) }>
                            <span className="text-l text-gray-800">2023-2024</span>
                        </span>
                    </div>
                </div>
                
                <>{/*Link*/}</>
                <div>
                   <Link href={""} className="text-blue-600 text-l flex items-center gap-2">
                   <div className="font-medium">View Link</div>
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                   </Link>
                </div>
            </div>
        </div>
        <div className="flex-initial w-7/12">
            <CasePhoto/>
        </div>
      </div>
  )
}

export default ShowcasePanel
