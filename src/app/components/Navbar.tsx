'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react'



const navItems = [
    { label: "Our Events", id: "/Calendar" },
    { label: "FAQ", id: "/FAQ" },
    { label: "Blog", id: "/Blog" },
    { label: "Announcements", id: "/Announcements" }
];


export default function Navbar() {
    const imgRef = useRef<HTMLImageElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleIcon = () => {
        if (!imgRef.current) return;
        const isMenu = imgRef.current.src.includes('menu.svg');
        imgRef.current.src = isMenu ? '/x.svg' : '/menu.svg';


        if (menuRef.current) {
            const isHidden = menuRef.current.classList.contains('hidden');
            if (isHidden) {
                menuRef.current.classList.remove('hidden');
                menuRef.current.classList.add('flex');
            } else {
                menuRef.current.classList.remove('flex');
                menuRef.current.classList.add('hidden');
            }
        }
    };

    return (
        <header className="w-full z-50 transition-all duration-300 bg-white">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/" className='flex flex-row gap-2'>
                        <Image
                            src="/acm.svg"
                            alt="ACM logo"
                            width={32}
                            height={32}
                            className='md:w-24 md:h-24' />
                        <span className="font-archivo font-bold text-md md:text-lg lg:text-xl text-black py-0.5 md:py-8">
                            [at Maastricht University]
                        </span>
                    </Link>
                </div>
                <div className="flex-row hidden md:flex gap-4 md:gap-8 font-archivo">
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
                <div className="md:hidden">
                    <button onClick={toggleIcon}>
                        <Image
                            src="/menu.svg"
                            ref={imgRef}
                            alt='menu'
                            width={32} height={32} />
                    </button>
                </div>
            </nav>

            <div
                ref={menuRef}
                className="hidden flex-col md:hidden px-4 pb-4 gap-4 font-archivo"
            >
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.id}
                        className="text-gray-700 text-md border-b w-fit"
                    >
                        {item.label}
                    </a>
                ))}
            </div>



        </header>
    );
}
