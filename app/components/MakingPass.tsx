import Link from "next/link";

export function MakingPass () {
    return(
        <section className="bg-[url(/bgMakingPassive.png)] bg-no-repeat bg-right-top bg-cover xl:bg-contain w-full min-h-min pb-20 mb-5 mt-30 pt-5">
            <div className="max-w-screen-2xl mx-auto w-full">
                <h2 className="text-xl px-5  lg:text-5xl xl:w-5xl mt-14"
                style={{
                    textShadow: "1px 1px 10px #000"
                }}
                >The 3 ways of making passive income with BaseCore</h2>
                <div className="grid grid-cols-4 gap-3 mt-20 mb-20 py-5 items-center">
                    <div></div> {/* Пустая первая колонка */}


                    <div className="flex flex-col p-3 bg-gray-700/50 rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300">
                        <span className=" font-bold
                        bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            Stacker
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 1 BCE
                        </span>                        
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.005 BCE
                        </span>                   
                    </div>

                    <div className="flex flex-col p-3 bg-gray-700/50 rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300">
                        <span className=" font-bold
                        bg-linear-30 from-[#2E7A] to-[#2E727A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            Masternode
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 1000 BCE
                        </span>                        
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.495 BCE
                        </span>                   
                    </div>


                    <div className="flex flex-col p-3 bg-gray-700/50 rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300">
                        <span className=" font-bold
                        bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            Masternode instant
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Required minimum</span>
                            from 0.001 BCE
                        </span>                        
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">Reward</span>
                            0.495 BCE
                        </span>                   
                    </div>  
                </div>
            </div>
        </section>
    )
}