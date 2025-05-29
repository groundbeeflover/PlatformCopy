import React from 'react'
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Our Events", id: "/Platform/Calendar"},
    { label: "FAQ", id: "/Platform/FAQ"},
    { label: "Blog", id: "/Platform/Blog"},
    { label: "Announcements", id: "/Platform/Announcements"}
];

export default function Navbar() {
    return (
        <header className="w-full z-50 transition-all duration-300 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image 
                        src="/Platform/acm.svg" 
                        alt="ACM logo" 
                        width={32} 
                        height={32} 
                        className='md:w-16 md:h-16' />
                        <span className="font-archivo font-bold text-md md:text-lg lg:text-xl text-black">
                            at Maastricht University
                        </span>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-archivo">    
                {/* <div className="flex gap-4 md:gap-8 font-archivo"> */}
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`${item.id}`}
                            className="
                            hover:text-black 
                            text-md
                            lg:text-lg
                            transition-colors
                            w-fit
                            border-b-2
                            text-gray-500
                            "
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
