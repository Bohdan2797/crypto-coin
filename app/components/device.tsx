import Image from "next/image";
import Link from "next/link";

export function Device () {
    return(
        <section className="max-w-screen-2xl mx-auto mt-20 mb-20">
            <h2 className="text-3xl w-5xl"
            style={{
                textShadow: '1px 1px 10px #000'
            }}
            >You can pay and transfer coins through wallets on any device</h2>
            <div className="flex justify-between items-start mt-30">
                <div className="text-4xl">
                    <h2 className="mb-10">Web wallet</h2>
                    <Link href={"#"}
        className=" bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
                    >PAY</Link>
                </div>
                <div className="flex flex-col [&_a]:text-xl  gap-5 text-4xl border-l-1 border-gray-500 pl-10">
                    <h2>Mobile wallet</h2>
                    <Link href={"#"}
                    className=" flex items-center gap-3 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"                    
                    >
                        <Image src='/icons/apple.png' width={30} height={30} alt="logo apple store" />
                        APP STORE</Link>
                    <Link href={"#"}
                    className=" flex items-center gap-3 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"                    
                    >
                    <Image src='/icons/googleplay.png' width={30} height={30} alt="logo apple store" />
                        GOOGLE PLAY</Link>
                </div>
                <div className="flex flex-col font-normal [&_a]:text-xl gap-5 text-4xl border-l-1 border-gray-500 pl-10">
                    <h2>Desktop wallet</h2>
                    <Link href={"#"}
                    className=" flex items-center gap-3 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"                    
                    >
                                            <Image src='/icons/macos.png' width={30} height={30} alt="logo apple store" />

                        MAC OS </Link>
                    <Link href={"#"}
                    className=" flex items-center gap-3 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"                    
                    >
                                            <Image src='/icons/linux.png' width={30} height={30} alt="logo apple store" />

                        LINUX</Link>
                    <Link href={"#"}
                    className=" flex items-center gap-3 py-3 px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"                    
                    >
                                            <Image src='/icons/windows.png' width={30} height={30} alt="logo apple store" />

                        WINDOWS</Link>

                </div>
            </div>
        </section>
    )
}