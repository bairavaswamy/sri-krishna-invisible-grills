'use client'
import react,{ useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  Home,
  Phone,
  Info,
} from "lucide-react"
import { memo } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })


const MenuClient  = dynamic(() => import('./Menuclient'), {
  ssr: false,
})

const DropdownClient = dynamic(
  () => import('./Dropdownclient'),
  {
    ssr: false,
    loading: () => (
      <p className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group">
        Services
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

      </p>
    ),
  }
);

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [showTopBar, setShowTopBar] = useState(true)
  // const [lastScrollY, setLastScrollY] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY

  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       // scrolling down
  //       setShowTopBar(false)
  //     } else {
  //       // scrolling up
  //       setShowTopBar(true)
  //     }

  //     setLastScrollY(currentScrollY)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [lastScrollY])

  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        
        {/* Main Header */}
        <header className="bg-gradient-to-br from-white via-orange-50 to-gray-100 flex items-center  justify-between px-6 pt-4 pb-0">
          <div className="flex  items-center gap-3">
            <Image
              src="/Rohini_logo.webp"
              alt="Rohini Invisible Grills"
              width={120}
              height={95}
              priority
              className="h-16 sm:h-22 w-auto"
            />

            <div>
             <h1 className="relative text-sm sm:text-lg md:text-xl font-extrabold tracking-wider text-gray-800">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500 bg-clip-text text-transparent filter blur-sm opacity-70"></span>
              <span className="relative bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Rohini Invisible Grills
              </span>
            </h1>
              <div className="flex items-center gap-2">
              <span className="flex-1 h-[1px] bg-gray-400"></span>

              <p className="text-[10px] text-gray-600 md:font-medium whitespace-nowrap">
                Safety Nets Distribution
              </p>

              <span className="flex-1 h-[1px] bg-gray-400"></span>
            </div>
            </div>
          </div>

          {/* <nav className="hidden lg:flex items-center justify-between gap-4">
            <div className="hidden lg:flex">
             <div className=" flex items-center">
              <Link href="/" className="text-primary flex items-center text-lg md:text-sm lg:text-xl font-semibold px-4 py-2">
                 <Home size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    Home
                  </Link>

                <DropdownClient />

                  <Link href="/contact" className="text-primary md:text-sm lg:text-xl flex items-center text-lg font-semibold px-4 py-2">
                 <Phone size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    Contact Us
                  </Link>

                   <Link href="/about" className="text-primary md:text-sm lg:text-xl flex items-center text-lg font-semibold px-4 py-2">
                 <Info size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" />
                    About Us
                  </Link>
              </div>
            </div>
          </nav> */}
          <nav className="hidden lg:flex items-center justify-between">
  <div className="flex items-center space-x-2">

    <Link
      href="/"
      className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group"
    >
      Home
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>

    <DropdownClient />

    <Link
      href="/contact-us"
      className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group"
    >
      Contact Us
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>

    <Link
      href="/about"
      className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group"
    >
      About Us
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>

  </div>
</nav>

          <div className=" flex items-center gap-4">
            <div className="hidden sm:inline-block">
             <div className=" flex items-center">
              
                <button onClick={() => {
                      const element = document.getElementById("quote")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}  className="hidden sm:inline-block text-sm btn-accent md:text-sm lg:text-xl text-white px-4 py-2 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded hover:opacity-90 transition">
                  Request Quote 
                </button>
            </div> 
          </div>
          <div className="block lg:hidden">
            <button
              aria-label="menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button></div>
          </div>
        </header>

       
      </div>

      {/* Important: Prevent content hiding under fixed header */}
      <div className="pt-20" />
      <div className="block lg:hidden">
      <MenuClient open={open} onClose={() => setOpen(false)} />
        </div>
    </>
  )
}

export default memo(Header)