'use client'
import Image from "next/image";
import Link from "next/link";
import { Links, routeMap } from "../data/navLinks"; // Импортируем routeMap
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation"; // Добавляем для подсветки активной ссылки

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname(); // Получаем текущий путь

  const getTranslationKey = (link: string) => {
    return link.charAt(0).toLowerCase() + link.slice(1);
  };

  return (
    <nav> 
      <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mb-10 pt-5">
        <div className="flex justify-center items-center gap-2 px-5 py-2 rounded-2xl">
          <Image src="/logo1.png" alt="logo" width={50} height={50} />
          <span className="text-lg lg:text-lg font-semibold">BaseCore</span>
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
                href={routeMap[link]} // Используем routeMap для ссылок
                className={`text-xl font-semibold transition-colors ${
                  pathname === routeMap[link] ? 'hover:text-[#2E7A]' : 'hover:text-[#2E7A]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${getTranslationKey(link)}`)}
              </Link>
            ))}
            <Link 
              href="#" 
              className="bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-8 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.buyBce')}
            </Link>
            <div className="mt-4">
              <LanguageSwitcher/>
            </div>
          </div>
        </div>

        {/* Десктопное меню */}
        <ul className="hidden xl:flex gap-x-4 uppercase bg-[#838AA0]/10 backdrop-blur-md rounded-2xl py-3 px-4">
          {Links.map((link, index) => (
            <li 
              key={index} 
              className={`px-3 py-2 border-1 rounded-2xl transition-colors duration-500 ${
                pathname === routeMap[link] 
                  ? "border-transparent hover:border-[#2E7A]" // активный стиль
                  : "border-transparent hover:border-[#2E7A]" // обычный стиль
              }`}
            >
              <Link 
                href={routeMap[link]}
                className="block w-full h-full"
              >
                {t(`nav.${getTranslationKey(link)}`)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden xl:block">
          <LanguageSwitcher/>
        </div>

        <Link href="#" className="hidden xl:block bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
          {t('nav.buyBce')}
        </Link>
      </div>
    </nav>
  );
}