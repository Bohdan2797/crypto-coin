'use client'
import { useSlider } from "../hooks/useSlider";

export function MakingPass() {
    const { sliderRef } = useSlider();

    return (
        <section className="bg-[url(/bgMakingPassive.png)] bg-no-repeat bg-right-top bg-cover xl:bg-contain w-full min-h-min pb-20 mb-5 mt-30 pt-5 px-5">
            <div className="max-w-screen-2xl mx-auto w-full">
                <h2 className="text-lg sm:text-xl lg:text-5xl xl:w-5xl mt-14" style={{ textShadow: "1px 1px 10px #000" }}>
                    The 3 ways of making passive income with BaseCore
                </h2>
                <div 
                    ref={sliderRef} 
                    className="flex gap-2 sm:gap-3 mt-10 sm:mt-20 mb-10 sm:mb-20 py-3 sm:py-5 items-center overflow-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing md:justify-center px-3 sm:px-5 md:px-0">
                    <div className="hidden xl:block w-1/4"></div>
                    <div className="flex flex-col p-2 sm:p-3 bg-gray-700/50 rounded-3xl gap-y-2 sm:gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-[280px] sm:max-w-xs min-w-[200px] sm:min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold text-sm sm:text-base bg-linear-30 from-[#2E727A] to-[#2E7A] py-2 sm:py-3 px-3 sm:px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            Stacker
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 1 BCE
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.005 BCE
                        </span>
                    </div>

                    <div className="flex flex-col p-2 sm:p-3 bg-gray-700/50 rounded-3xl gap-y-2 sm:gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-[280px] sm:max-w-xs min-w-[200px] sm:min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold text-sm sm:text-base bg-linear-30 from-[#2E7A] to-[#2E727A] py-2 sm:py-3 px-3 sm:px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            Masternode
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 1000 BCE
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.495 BCE
                        </span>
                    </div>

                    <div className="flex flex-col p-2 sm:p-3 bg-gray-700/50 rounded-3xl gap-y-2 sm:gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-[280px] sm:max-w-xs min-w-[200px] sm:min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold text-sm sm:text-base text-nowrap bg-linear-30 from-[#2E727A] to-[#2E7A] py-2 sm:py-3 px-3 sm:px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            Masternode instant
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 0.001 BCE
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-2 sm:py-3 px-3 sm:px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.495 BCE
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
