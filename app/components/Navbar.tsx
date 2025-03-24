'use client'
import Image from "next/image";
import Link from "next/link";
import { Links, routeMap } from "../data/navLinks";
import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTranslationKey = (link: string) => {
    return link.charAt(0).toLowerCase() + link.slice(1);
  };

  // Стили для навбара с анимацией
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-[200] 
    w-full max-w-screen-2xl mx-auto mb-10 pt-5 
    transition-all duration-500 ease-in-out
    ${scrollDirection === 'down' && !atTop ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
    ${atTop ? 'bg-transparent' : 'bg-transparent'}
  `;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mb-10 pt-5">
          <div className="flex justify-center items-center gap-2 px-5 py-2 rounded-2xl">
            <Image src="/logo1.png" alt="logo" width={40} height={40} />
            <span className="text-lg font-semibold">BaseCore</span>
          </div>

          {/* Бургер-кнопка */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden px-5 relative z-[200]"
          >
            {isMenuOpen ? (
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span className="absolute w-6 h-0.5 bg-white rotate-45 transition-all duration-300"></span>
                <span className="absolute w-6 h-0.5 bg-white -rotate-45 transition-all duration-300"></span>
              </div>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
                <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
                <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
              </div>
            )}
          </button>

          {/* Десктопное меню */}
          <ul className="hidden xl:flex gap-x-4 uppercase bg-[#838AA0]/10 backdrop-blur-md rounded-2xl py-3 px-4">
            {Links.map((link, index) => (
              <li 
                key={index} 
                className={`px-3 py-2 border-1 rounded-2xl transition-colors duration-500 ${
                  pathname === routeMap[link] 
                    ? "border-transparent hover:border-[#2E7A]" 
                    : "border-transparent hover:border-[#2E7A]"
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

      {/* Мобильное меню */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg z-[150] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } xl:hidden`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          {Links.map((link, index) => (
            <Link 
              key={index} 
              href={routeMap[link]}
              className={`text-xl font-semibold transition-all duration-300 transform hover:text-[#2E7A] hover:scale-110 ${
                pathname === routeMap[link] ? 'text-[#2E7A]' : ''
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`nav.${getTranslationKey(link)}`)}
            </Link>
          ))}
          <Link 
            href="#" 
            className="bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-8 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-all hover:scale-105 text-xl"
            style={{
              transitionDelay: `${Links.length * 100}ms`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.buyBce')}
          </Link>
          <div 
            className="mt-4"
            style={{
              transitionDelay: `${(Links.length + 1) * 100}ms`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <LanguageSwitcher/>
          </div>
        </div>
      </div>
    </>
  );
}