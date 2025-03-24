'use client'
import { useTranslation } from "@/app/hooks/useTranslation";
import Link from "next/link";
import Table from "./Table";

export default function Staking() {
    const { t } = useTranslation();

    return (
        <section className="bg-[url(/bgInvest.png)] min-h-screen mb-20 bg-no-repeat bg-center bg-cover w-full">
            <div className="w-full pt-30 max-w-screen-2xl mx-auto">


                <nav className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">DASHBOARD</h2>
                    <div className="flex items-center gap-2">
                        <Link href="#" className="w-fit bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
                            {t('nav.buyBce')}
                        </Link>
                        <span className="flex items-center gap-2 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        USER WALLET

                        </span>
                    </div>
                </nav>

                <div className="flex mt-15 justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl font-bold">199,773 BCE</span>
                        <span>Your current balance</span> 
                    </div>
                    <button className="w-fit  bg-linear-30 text-clip from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
                            STAKE
                        </button>
                </div>

                <div className="flex w-full gap-10 justify-center mt-15">

                    <div className="flex w-full flex-col gap-2 text-center border-1 border-green-500/50 rounded-2xl p-5 shadow-md shadow-green-500/50">
                        <span className="text-sm text-gray-300">Market Capitalization</span>
                        <span className="text-2xl font-bold">$ 21.0M</span>
                    </div>
                    <div className="flex w-full flex-col gap-2 text-center border-1 border-green-500/50 rounded-2xl p-5 shadow-md shadow-green-500/50">
                        <span className="text-sm text-gray-300">Price BCE</span>
                        <span className="text-2xl font-bold">$0.025</span>
                    </div>
                    <div className="flex w-full flex-col gap-2 text-center border-1 border-green-500/50 rounded-2xl p-5 shadow-md shadow-green-500/50">
                        <span className="text-sm text-gray-300">APY</span>
                        <span className="text-2xl font-bold">371%</span>
                    </div>
                    <div className="flex w-full flex-col gap-2 text-center border-1 border-green-500/50 rounded-2xl p-5 shadow-md shadow-green-500/50">
                        <span className="text-sm text-gray-300">Total Staked</span>
                        <span className="text-2xl font-bold">34.99B BCE</span>
                    </div>
                    <div className="flex w-full flex-col gap-2 text-center border-1 border-green-500/50 rounded-2xl p-5 shadow-md shadow-green-500/50">
                        <span className="text-sm text-gray-300" >Your Staked Balance</span>
                        <span className="text-2xl font-bold">14.2K BCE</span>
                    </div>
                    
                </div>

                <div>
                    <Table/>
                </div>

            </div>
        </section>
    )
}