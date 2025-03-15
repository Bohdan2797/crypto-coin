import Link from "next/link";

export function MakingPass () {
    return(
        <section className="bg-[url(/bgMakingPassive.png)] bg-no-repeat bg-right-top bg-contain w-full h-screen mt-30 pt-5">
            <div className="max-w-screen-2xl mx-auto w-full">
                <h2 className="text-5xl w-5xl mt-14">The 3 ways of making passive income with BaseCore</h2>
                <div className="grid grid-cols-4 py-5 items-center">
                    <span></span> {/* Пустая первая колонка */}
                    <span className=" font-bold
                    bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors
                    ">Stacker</span>
                    <span className=" font-bold
                    bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors
                    ">Masternode</span>
                    <span className=" font-bold
                    bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors
                    ">Masternode instant</span>
                </div>
            </div>
        </section>
    )
}