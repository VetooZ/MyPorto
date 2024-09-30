'use client'

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { InstagramLogo, GithubLogo } from "@phosphor-icons/react"

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
        <header className="p-4 bg-primary">
            <div className="flex items-center justify-between relative">

                <Link href={"/"} className="flex items-center text-white font-bold text-2xl px-10">Vetooz</Link>
                <button onClick={toggleSidebar} className="block md:hidden text-white">
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white "></span>
                </button>
                <div ref={sidebarRef}
                    className={`fixed top-0 right-0 h-full w-64 bg-primary text-white transition-transform duration-300 transform ${isOpen ? '-translate-x-0 shadow-blue-500/50 shadow-xl' : 'translate-x-full'}`}>

                    <div className="p-4">
                        <button onClick={toggleSidebar} className="block md:hidden text-white">
                            <span className="w-10 h-[2px] my-2 block bg-white rotate-45 translate-y-2 translate-x-1"></span>
                            <span className="w-10 h-[2px] my-2 block bg-white -rotate-45 -translate-y-1 translate-x-1"></span>
                        </button>
                        <div className="flex flex-col py-5 ">

                            <Link href={"/"} className="py-5 rounded-lg active:bg-white active:text-primary active:shadow-2xl active:shadow-blue-500/50">Home</Link>
                            <Link href={"/"} className="py-5 rounded-lg active:bg-white active:text-primary active:shadow-2xl active:shadow-blue-500/50">Project</Link>
                            <Link href={"/"} className="py-5 rounded-lg active:bg-white active:text-primary active:shadow-2xl active:shadow-blue-500/50">About</Link>
                            <Link href={"/"} className="py-5 rounded-lg active:bg-white active:text-primary active:shadow-2xl active:shadow-blue-500/50">Hobby</Link>
                        </div>


                    </div>
                    <div className="absolute inset-x-0 bottom-2 px-2">
                        <div className="flex">
                            <InstagramLogo size={35} />
                            <Link href={"/"}>Instagram</Link>
                        </div>
                        <div className="flex">
                            <GithubLogo size={35} />
                            <Link href={"/"}>Github</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center px-10 gap-10">
                        <Link href={"/"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue-500/50 transition duration-500">Home</Link>
                        <Link href={"/"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue-500/50 transition duration-500">Project</Link>
                        <Link href={"/"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue-500/50 transition duration-500">About</Link>
                        <Link href={"/"} className="text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue-500/50 transition duration-500">Hobby</Link>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Navbar