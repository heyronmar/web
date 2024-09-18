import Link from "next/link";

//built components
import Nav from "@/components/Nav"

const Header = () => {
  return (
   <header className="py-5">
        <div className="container p-0 mx-auto flex justify-between items-center">
            
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
                Mobile Nav Here
           </div>

        </div>
   </header>
  )
}

export default Header
