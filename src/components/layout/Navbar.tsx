import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationData } from "../../constants/navigationData";
import { useLocation } from "react-router";
import { useState,useEffect} from "react";
import Hamburger from "../ui/Hamburger";
import { Link } from "react-router";
function Navbar() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {

    window.scrollTo(0,0)
    
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen])


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  const handleMenuNavigation = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 889) {
      setIsOpen(false)
    }
  }

  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
    
  return (
   <nav className='navbar relative'>
     <div className="xl:container xl:mx-auto">
         <div className="navbar-container grid gap-2 pt-2 md:pt-0 md:py-2 w-full relative">
            <div className="navbar-row-upper flex flex-row justify-between items-center pt-2">
                <div className="logo-container ml-2 xl:ml-0 flex flex-col">
                    <Link className="text-blue-900 text-2xl xl:text-4xl font-extrabold" aria-label="logo" to="/">
                        Вісті Водолажчини
                    </Link>
                    <div className="slogan text-sm text-gray-600 italic">ваша місцева громадська газета</div>
                </div>
                <ul className="social-icons flex flex-row gap-4 mr-2 xl:mr-4">
                    <li><Link to="/" className="text-gray-600 hover:text-gray-700" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    <li><Link to="/" className="text-gray-600 hover:text-gray-700" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    <li><Link to="/" className="text-gray-600 hover:text-gray-700" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                </ul>
            </div>
        <div className="navbar-lower p-6 md:p-4 xl:rounded-b-lg bg-blue-900 shadow-md ">
                <ul className="nav-links hidden nav-820 flex-row items-center gap-4 font-semibold border-white/40">
                    {navigationData.map((link) => (
                        <li key={link.name} className={`nav-link cursor-pointer transition duration-300 ${location.pathname === link.path ? 'active text-blue-900 px-2 py-1  bg-white rounded' : 'text-white px-2 py-1 hover:bg-white hover:text-blue-900 rounded'}`}>
                            <Link to={link.path} aria-current={location.pathname === link.path ? 'page' : undefined}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div aria-label={isOpen ? 'Close menu' : 'Open menu'} className="hamburger-container w-fit ml-auto z-60 relative">
                    <Hamburger isChecked={isOpen} ariaExpanded={isOpen} ariaControls="nav-mobile" onClick={()=> handleMenuNavigation()} />
                </div>
            </div>
         </div>
        </div>
        <div className={`block! lg:hidden! ${isOpen ? 'block z-20 absolute inset-0 h-dvh opacity-100 pointer-events-auto': ' pointer-events-none opacity-0'}`}>
            <div className="flex flex-col h-full">
                {isOpen &&(
                     <div className="h-37 md:h-31 border-b border-white"></div>
                )}
                <div className="flex-1 h-full relative">
                    <div  className="absolute inset-0 bg-black/50"></div>
                    <div onClick={handleMenuNavigation} className="absolute inset-0 z-50">
                        <div className={`h-full bg-blue-900 w-4/6 transition-all duration-300  ${isOpen ? 'translate-x-0':'-translate-x-full'}`}>
                            <ul className="flex-col gap-2 py-2 overflow-y-scroll absolute inset-0">
                                        {navigationData.map((link) => (
                                            <li key={link.name} className="border-b py-3 border-white/40">
                                                <Link to={link.path} className="text-white font-bold text-lg ml-2" onClick={handleMenuNavigation}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </nav>
     
    
     
  )
}

export default Navbar





