import { useState } from 'react';
import iconMenu from "../../img/icon_menu.png"
import iconCerrar from "../../img/icon_cancelar.png";
import logo from "../../img/logo_react.webp";

const enlaces = [ 
    { title: "Acerca de Mi"},
    { title: "Proyectos"},
    { title: "Skills"},
    { title: "Contacto"} 
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="bg-gradient-to-r from-[#0d161c] to-[#1e324d] shadow-2xl sm:flex justify-between items-center py-5 sm:px-36">
            <div className="flex items-center justify-between px-3">
                <div className="cursor-pointer ml-4">
                    <img src={logo.src} alt="" className='h-16 animate-pulse'/>
                </div>

                <div className='p-2 cursor-pointer sm:hidden mr-6'>
                    <img
                        className='h-8'
                        onClick={ handleClick }
                        src={menuOpen ? iconCerrar.src: iconMenu.src} 
                        alt="menu"
                    />
                </div>
            </div>

            <div className={`bg-gradient-to-r from-[#0d161c] to-[#1e324d] p-6 duration-300 ease-in absolute top-[-400px] sm:top-0 sm:w-auto left-0 w-full sm:static sm:bg-none ${menuOpen && 'top-[80px] opacity-100'}`}>
                <ul className='flex flex-col gap-5 sm:flex-row sm:gap-7'>
                    {enlaces.map((enlace, index) => (
                        <li key={index} className='text-white font-extrabold tracking-wide hover:text-blue-600 transition-all'>
                            <a href={`#${enlace.title}`} onClick={ closeMenu }>
                                {enlace.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>        
        </nav>
    );
};
export default Navbar;
