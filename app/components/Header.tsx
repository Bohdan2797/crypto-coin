import Link from "next/link";
import { Navbar } from "./Navbar";
import Image from "next/image";

export function Header() {
    return (
        <section className="bg-[url(/bg1.png)] bg-no-repeat bg-center bg-cover w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto  flex-grow">
                <div className="flex flex-col">
                    <h2 className="flex flex-col text-7xl gap-y-2 font-bold">
                        <span>BaseCore : </span>
                        <span className="font-exo text-9xl w-3/4  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#01fb37] to-[#001affaa] relative inline-block 
                        bg-[length:200%_200%] animate-[gradient-move_5s_infinite]">
                        Secure, Scalable, For Everyone
                        </span>
                    </h2>
                   
                </div>
            </div>
            
            <div className="w-full max-w-screen-2xl mx-auto mt-auto py-8">
                <div className="flex justify-evenly items-center mt-4">
                    <div className="flex justify-center items-center pb-10">
                            <Image src='/logo2.png' alt='logo BaseCore' width={350} height={150} />
                    </div>
                    <div className="flex flex-col w-1/3 ml-40 font-semibold gap-y-5">
                        <span className="">
                        The main mission of the project is to make BaseCore accessible to everyone and lower the entry threshold for all investors.  
                        </span>
                        <span className="">
                        Your hassle-free access to BaseCore                    
                        </span>
                    </div>
                    <div className="flex gap-5 font-bold">
                        <Link href="#" className="bg-linear-30 from-[#2E7A] to-[#2E727A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            Get Started
                        </Link>
                        <Link href="#" className="py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                            Get a Basename
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}