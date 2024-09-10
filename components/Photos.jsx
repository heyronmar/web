"use client";

import Image from "next/image";

export function CasePhoto () {
  return (
    <div className="w-full h-full relative">
      <div className="w-auto xl:w-auto xl:h-auto">
        <Image 
            src="./assets/medenterprises.webp"  
            priority quality={100}
            fill
            alt="medenterprises"
            className="object-cover" 
        />
      </div>
    </div>
  )
}

  
export function CaseLogo () {
    return(
        <div className="w-full h-full relative">
        <div className="max-h-8 max-w-8">
          <Image 
              src="./assets/medenterprises_logo.webp"  
              priority quality={100}
              fill
              alt="medenterprises"
              className="object-cover rounded-full" 
          />
        </div>
      </div>
    )
}
      

  