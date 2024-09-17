"use client";

import Image from "next/image";

const CasePhoto = () => (
  <div className="w-full h-full relative"> {/* Ensures that the parent container has relative positioning */}
    <div className="w-auto xl:w-auto xl:h-auto">
      <Image 
        src="/assets/medenterprises.webp"  
        priority 
        quality={100}
        fill
        alt="medenterprises"
        className="object-cover content-center" 
      />
    </div>
  </div>
);
    
const CaseLogo = () => (
  <div className="relative w-6 h-6"> {/* Wrapper to handle the "fill" prop correctly */}
    <Image 
      src="/assets/medenterprises_logo.webp"  
      priority 
      quality={100}
      fill
      alt="medenterprises"
      className="rounded-full overflow-hidden object-cover" 
    />
  </div>
);
    
export { CasePhoto, CaseLogo };
