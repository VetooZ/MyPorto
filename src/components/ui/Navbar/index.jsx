'use client'

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { InstagramLogo, GithubLogo, HouseLine, Code, ReadCvLogo, GameController } from "@phosphor-icons/react"
import Typewriter from "typewriter-effect";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Jika sidebar terbuka dan klik terjadi di luar sidebar
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false); // Menutup sidebar
            }
        };

        // Tambahkan event listener pada saat komponen di-mount
        document.addEventListener('mousedown', handleClickOutside);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="p-4 bg-gradient-to-r from-primary to-gray sticky top-0 z-10">
            <div className="flex items-center justify-between relative">

                <Link href={"/"} className="flex items-center text-white font-bold text-2xl px-10">
                    Vetooz
                </Link>
                <button onClick={toggleSidebar} className="block md:hidden text-white">
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white "></span>
                </button>
                <div ref={sidebarRef}
                    className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-primary from-60% to-gray text-white transition-transform duration-300 transform ${isOpen ? '-translate-x-0 shadow-blue shadow-xl z-10' : 'translate-x-full'}`}>

                    <div className="p-4">
                        <button onClick={toggleSidebar} className="block md:hidden text-white">
                            <span className="w-10 h-[2px] my-2 block bg-white rotate-45 translate-y-2 translate-x-1"></span>
                            <span className="w-10 h-[2px] my-2 block bg-white -rotate-45 -translate-y-1 translate-x-1"></span>
                        </button>
                        <div className="flex flex-col py-5 ">

                            <Link href={"/"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <HouseLine size={20} />
                                Home
                            </Link>
                            <Link href={"/projects"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <Code size={20} />
                                Projects
                            </Link>
                            <Link href={"/about"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <ReadCvLogo size={20} />
                                About
                            </Link>
                            <Link href={"/hobby"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <GameController size={20} />
                                Hobby
                            </Link>
                        </div>


                    </div>
                    <div className="absolute inset-x-0 bottom-16 px-2 ">
                        <span className="w-full h-[2px] block bg-white mb-2 rounded-full"></span>
                    </div>
                    <div className="absolute inset-x-0 bottom-2 px-2">
                        <div className="flex flex-row-reverse items-center">
                            <InstagramLogo size={25} />
                            <Link href={"https://www.instagram.com/vetozt__"} className="textshadow">Instagram</Link>
                        </div>
                        <div className="flex items-center">
                            <GithubLogo size={25} />
                            <Link href={"https://github.com/VetooZ"} className="textshadow">Github</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center px-10 gap-10">
                        <Link href={"/"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-out duration-500">Home</Link>
                        <Link href={"/projects"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-in-out duration-500">Project</Link>
                        <Link href={"/about"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-in-out duration-500">About</Link>
                        <Link href={"/hobby"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-in-out duration-500">Hobby</Link>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Navbar