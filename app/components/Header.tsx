import Link from "next/link";
import { Navbar } from "./Navbar";
import Image from "next/image";

export function Header() {
    return (
        <section className="bg-[url(/bg7.jpg)] bg-no-repeat bg-center bg-cover w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mt-30 flex-grow">
                <div className="flex flex-col">
                    <h2 className="flex flex-col text-7xl gap-y-20 font-bold">
                        <span>MINING </span>
                        <span className="font-exo text-9xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#22b4c4] to-[#07853baa] relative inline-block gradient-animation">
                            WITHOUT LIMITS
                        </span>
                    </h2>
                    <span className="w-2/3 mt-10 text-right">
                        Build anything you want, any way you want on the lightning fast, scalable blockchain that won’t let you down. Choosing the wrong blockchain can kill your dApp before it ever has a chance to succeed, but it doesn’t have to be this way. Launch with confidence on Avalanche.
                    </span>
                </div>
            </div>
            
            <div className="w-full max-w-screen-2xl mx-auto mt-auto py-8">
                <h2 className="font-extrabold text-3xl font-exo">Base Core - is for everyone</h2>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-5">
                        <Link href="#" className="bg-linear-30 from-[#2E7A] to-[#2E727A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            Get Started
                        </Link>
                        <Link href="#" className="py-3 px-5 rounded-2xl border-2  border-transparent hover:border-[#495878] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                            Get a Basename
                        </Link>
                    </div>
                    <div>
                        <span className="flex gap-3">
                            <Image src='/op.svg' alt='logo op' width={24} height={24} />
                            Built on the Superchain
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}