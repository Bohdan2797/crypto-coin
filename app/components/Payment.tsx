import Image from "next/image";
import Link from "next/link";

export function Payment () {
    return(
        <section className="mx-auto relative max-w-screen-2xl ">
            <div className="flex  items-center gap-10 mb-30">
                <h2 className="text-green-500 text-4xl">Goals </h2>
                <span className="text-3xl">We plan <span className="text-green-500"> to create an ecosystem of services </span> that will allow integrating BaseCore into people's everyday lives</span>
            </div>
            <section>
                <div className="flex flex-col font-exo gap-10">
                    <h2 className="text-5xl w-2xl">Payment for services and goods</h2>
                    <h3 className="text-green-500 text-2xl">Payment for services and goods</h3>
                </div>
                <div className="flex mt-20 gap-5 ">
                    <div className="flex-[1] justify-between p-5 gap-10  border-1 border-gray-500 rounded-2xl flex flex-col">
                        <span>We are planning to create an ecosystem of services that will allow the integration of BaseCore into everyday life</span>
                        <span><span> 01 
                            </span> / 03</span>
                    </div>
                    <div className="flex-[1] justify-between p-5 gap-10  border-1 border-gray-500 rounded-2xl flex flex-col">
                        <span>We are planning to create an ecosystem of services that will allow the integration of BaseCore into everyday life</span>
                        <span><span> 02 
                            </span> / 03</span>
                    </div>
                    <div className="flex-[2] flex flex-col bg-[#0073E5] gap-10 p-5 rounded-2xl">
                            <span>Payment facilities will be integrated in popular store transaction processing systems like Bitrix, Joomla, WordPress, Tilda, Shopify and others</span>
                            <div className=" flex justify-between items-end">
                                <span>
                                    <span> 02 </span> / 03  
                                </span>
                                <Image src='/services.png' alt="services BaseCore" width={200} height={40}/>
                            </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center w-full py-20">
                                <div className="flex flex-wrap  w-full gap-30 p-12 ">
                                    
                                    {/* Левая часть */}
                                    <div className="flex-1  font-exo   text-4xl text-left">
                                    <h2 className="font-semibold "
                                    style={{
                                        textShadow: "1px 1px 10px #000"
                                    }}
                                    >The native BaseCore wallet</h2>
                                    <ul className="mt-16 space-y-4 w-[400px] ml-5  text-xl text-gray-300">
                                        <li>- Allows users to stake their BaseCore tokens directly from the wallet to earn passive income.</li>
                                        <li>- Supports token swaps, liquidity provision, and yield farming.</li>
                                        <li>- Shake your phone near the seller's phone to pay</li>
                                        <li>- While primarily designed for BaseCore tokens, the wallet may also support other cryptocurrencies and tokens within the ecosystem.</li>
                                    </ul>
                                    </div>
                
                                    {/* Правая часть */}
                                    <div className="relative flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-green-500/20 ">
                                        <div className="relative"></div>
                                        <h2 className="text-2xl font-semibold text-left">
                                            <span className="text-gray-300 font-light">Sales Report</span>
                                            <span className="text-green-400 text-4xl font-bold block mt-2">4.65 K</span>
                                        </h2>
                
                                        <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
                                            <Image src="/icons/Activity 2.png" alt="logo" width={24} height={24} />
                                            +7.5%
                                        </span>
                
                                        {/* График */}
                                        <div className="w-full h-[300px] mt-6 bg-[url('/grafic2.png')] bg-center bg-contain bg-no-repeat"></div>
                                        </div>

                                        <div className="absolute bottom-15  left-1/2 transform -translate-x-1/2">
                                                <div className="bg-gray-500 rounded-lg shadow-md p-4 flex items-center space-x-10 max-w-xs">
                                                {/* Изображение карты */}
                                                    <div className="flex-shrink-0">
                                                        <img src="/icons/card.png" alt="Card" className="w-12 h-12 p-3 bg-white rounded-lg" />
                                                    </div>

                                                {/* Текстовая информация */}
                                                    <div className="flex flex-col gap-5 border-l-2 border-green-500 pl-5">
                                                        <div className="text-sm text-gray-600">Revenue</div>
                                                        <div className="text-lg font-bold">$4,480</div>
                                                        <div className="text-sm text-green-500 gap-3 flex items-center">
                                                            <span>+1.5%</span>
                                                            <span className="ml-1">Since last week</span>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="bg-[url(/bgLastPayment.png)] max-w-screen-xl mx-auto bg-no-repeat bg-top-left gap-5 rounded-2xl p-10 mb-10 border-1 border-gray-500 flex">
                                <h2 className="flex-1 text-3xl mt-20">Development is planned for the period of june 2025</h2>
                                <div className="flex flex-col gap-10 py-10 items-center text-2xl flex-1">
                                    <Link href={"#"} 
                                    className=" bg-linear-30 from-[#2E727A] w-fit to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
                                    >Download whitepaper</Link>
                                    <Link href="#" className="py-3 w-fit px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                                    View Road Map
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-10 mt-20 mb-10">
                                {/* Левый блок */}
                                <div className="flex-[1]">
                                    <h2 className="text-2xl mt-10 font-bold"
                                    style={{
                                        textShadow: '1px 1px 10px #000'
                                    }}
                                    >We have implemented the most advanced investor account protection</h2>
                                </div>

                                {/* Правый блок */}
                                <div className="flex-[2]">
                                    {/* Элемент с зеленым текстом и основным текстом */}
                                    <div className="flex border-b border-gray-500 py-4">
                                        <span className="text-green-500 w-48 flex-shrink-0">Unique monitoring system</span>
                                        <span>We have deployed a unique monitoring system to detect suspicious activity from unauthorized actions in 24/7 mode</span>
                                    </div>

                                    <div className="flex border-b border-gray-500 py-4">
                                        <span className="text-green-500 w-48 flex-shrink-0">Two-factor Authentication (2FA)</span>
                                        <span>Two-factor Authentication (2FA) protects investors’ personal accounts from unauthorized access</span>
                                    </div>

                                    <div className="flex border-b border-gray-500 py-4">
                                        <span className="text-green-500 w-48 flex-shrink-0">DDoS protection</span>
                                        <span>DDoS protection is a standard component of the system</span>
                                    </div>

                                    <div className="flex border-b border-gray-500 py-4">
                                        <span className="text-green-500 w-48 flex-shrink-0">Protected from attacks</span>
                                        <span>The servers of the exchange and wallets are protected from attacks</span>
                                    </div>
                                </div>
                            </div>
            </section>
        </section>
    )
}