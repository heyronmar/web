import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

const ShowcasePanel = () => {
  return (
    <div className="container flex mx-auto p-6 bg-white border-gray-100 rounded-xl my-12">
        <div className="flex-1">
            <div className=" flex-row justify-between py-12 px-8">
                
                <>{/*Brand*/}</>
                <div className="flex gap-2 pb-12">
                    <div className="inline-block min-w-8 min-h-8 bg-blue-500 rounded-full"> </div>
                    <span className="inline-block text-xl">Medenterprises</span>
                </div>
                
                <>{/*Teaser description*/}</>
                <div className="flex flex-col flex-wrap">
                    <div className="text-3xl tracking-normal font-medium text-gray-700">
                        <h2>Clinician’s companion</h2>
                    </div>
                    <div className="text-2xl text-gray-500 leading-snug font-light mt-1">
                        <p>Designing a mobile app for healthcare providers and to make their work easier</p>
                    </div>
                    <div className="mt-2 mb-20">
                        <span className={badgeVariants({ variant: "outline" }) }>
                            <span className="text-lg text-gray-600">2024</span>
                        </span>
                    </div>
                </div>
                
                <>{/*Link*/}</>
                <div>
                   <Link href={""} className="text-blue-600 text-xl">View work</Link>
                </div>
            </div>
        </div>
        <div className="flex-1">
            column 2
        </div>
      </div>
  )
}

export default ShowcasePanel
