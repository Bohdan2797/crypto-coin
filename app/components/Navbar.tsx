'use client'
import Image from "next/image";
import Link from "next/link";
import { Links } from "../data/navLinks";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav> 
      <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mb-10 pt-5">
        <div className="flex justify-center items-center gap-2 px-5 py-2 rounded-2xl">
          <Image src="/logo1.png" alt="logo" width={50} height={50} />
          <span className="text-xl lg:text-2xl font-semibold">BaseCore</span>
        </div>

        {/* Бургер-кнопка */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden px-5 z-50"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Мобильное меню */}
        <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {Links.map((link, index) => (
              <Link 
                key={index} 
                href="#" 
                className="text-2xl font-semibold hover:text-[#2E7A] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Link 
              href="#" 
              className="bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-8 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              BUY BCE
            </Link>
          </div>
        </div>

        {/* Десктопное меню */}
        <ul className="hidden xl:flex gap-x-4 uppercase bg-[#838AA0]/10 backdrop-blur-md rounded-2xl py-3 px-4">
          {Links.map((link, index) => (
            <li key={index} className="px-3 py-2 border-1 border-transparent hover:border-[#2E7A] transform-border transition-colors duration-500 rounded-2xl"> 
              <Link href="#">{link}</Link>
            </li>
          ))}
        </ul>
        <Link href="#" className="hidden xl:block bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
          BUY BCE
        </Link>
      </div>
    </nav>
  );
}