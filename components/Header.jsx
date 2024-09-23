import Link from "next/link";

//built components
import Nav from "@/components/Nav"
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
   <header className="py-5">
        <div className="container xl:p-0 mx-auto flex justify-between items-center">
            
            {/* Logo here */}

            <Link href="/" className="xl:hidden sm:flex">
                <h1>Ronmar</h1>
            </Link>

            {/* Desktop Nav */}

            <div className="hidden xl:flex">
                <Nav/>
            </div>

            {/* Mobile Nav */}
           <div className="xl:hidden">
                <MobileNav />
           </div>

        </div>
   </header>
  )
}

export default Header
