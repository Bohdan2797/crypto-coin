'use client'
import Link from "next/link";
import { Navbar } from "./Navbar";
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export function Header() {
    const { t } = useTranslation();
    
    return (
        <section className="bg-[url(/bg1.png)] bg-no-repeat bg-center bg-cover w-full  flex flex-col">
            <div className="w-full max-w-screen-2xl pt-30 flex justify-between items-center mx-auto  flex-grow">
                <div className="flex flex-col px-5">
                    <h2 className="flex flex-col text-4xl lg:text-7xl gap-y-10 xl:gap-y-25 font-bold mt-5">
                        <span>{t('hero.tagline')}</span>
                        <span className="font-exo text-6xl md:text-7xl xl:text-9xl max-w-2xl xl:max-w-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#01fb37] to-[#001affaa] relative inline-block 
                        bg-[length:200%_200%] animate-[gradient-move_5s_infinite]">
                            {t('hero.mainText')}
                        </span>
                    </h2>
                   
                </div>
            </div>
            
            <div className="w-full max-w-screen-2xl mx-auto mt-20 py-8">
                <div className="flex flex-col-reverse md:flex-row gap-y-10 justify-evenly items-center mt-4">
                    <div className="flex justify-center items-center  lg:pb-10">
                            <Image src='/logo2.png' alt='logo BaseCore' width={350} height={150} className="w-[200px] h-[200px]" />
                    </div>
                    <div className="flex flex-col max-w-[300px] xl:ml-40 font-semibold gap-y-5">
                        <span>{t('hero.mission')}</span>
                        <span>{t('hero.access')}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 px-5 text-nowrap font-bold">
                        <Link href="#" className="bg-linear-30 from-[#2E7A] to-[#2E727A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            {t('hero.buttons.getStarted')}
                        </Link>
                        <Link href="#" className="py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                            {t('hero.buttons.getBasename')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}