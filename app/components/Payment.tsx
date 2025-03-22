'use client'
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

export function Payment() {
    const { t } = useTranslation();
    
    return(
        <section className="mx-auto relative max-w-screen-2xl ">
            <div className="flex flex-col lg:flex-row px-5 xl:px-0  items-center gap-10 mb-30">
                <h2 className="text-green-500 text-4xl">{t('payment.goals.title')}</h2>
                <span className="text-3xl">{t('payment.goals.description')}</span>
            </div>
            <section>
                <div className="flex flex-col font-exo gap-10">
                    <h2 className="text-5xl w-full px-5 lg:w-2xl">{t('payment.services.title')}</h2>
                    <h3 className="text-green-500 px-5 xl:px-0 text-2xl">{t('payment.services.subtitle')}</h3>
                </div>
                <div className="flex flex-col px-5 lg:flex-row mt-20 gap-5 ">
                    <div className="flex-[1] justify-between p-5 gap-10  border-1 border-gray-500 rounded-2xl flex flex-col shadow-xl shadow-blue-400/20">
                        <span>{t('payment.services.cards.first.text')}</span>
                        <span><span>{t('payment.services.cards.first.number')}</span> / {t('payment.services.cards.first.total')}</span>
                    </div>
                    <div className="flex-[1] justify-between p-5 gap-10  border-1 border-gray-500 rounded-2xl flex flex-col shadow-xl shadow-green-400/20">
                        <span>{t('payment.services.cards.second.text')}</span>
                        <span><span>{t('payment.services.cards.second.number')}</span> / {t('payment.services.cards.second.total')}</span>
                    </div>
                    <div className="flex-[2] flex flex-col bg-[#0073E5] gap-10 p-5 rounded-2xl">
                            <span>{t('payment.services.cards.third.text')}</span>
                            <div className=" flex justify-between items-end">
                                <span>
                                    <span>{t('payment.services.cards.third.number')}</span> / {t('payment.services.cards.third.total')}
                                </span>
                                <Image src='/services.png' alt="services BaseCore" width={200} height={40}/>
                            </div>
                    </div>
                </div>
                <div className="flex relative justify-center items-center w-full py-20">
                    <div className="flex flex-col xl:flex-row  w-full gap-30 p-12 ">
                        <div className="flex-1 font-exo text-2xl lg:text-4xl text-left">
                            <h2 className="font-semibold px-5 lg:px-0"
                                style={{
                                    textShadow: "1px 1px 10px #000"
                                }}
                            >{t('payment.wallet.title')}</h2>
                            <ul className="mt-8 lg:mt-16 space-y-4 w-full lg:w-[400px] mx-5 lg:ml-5 text-base lg:text-xl text-gray-300">
                                <li>- {t('payment.wallet.features.staking')}</li>
                                <li>- {t('payment.wallet.features.swaps')}</li>
                                <li>- {t('payment.wallet.features.phonePayment')}</li>
                                <li>- {t('payment.wallet.features.support')}</li>
                            </ul>
                        </div>

                        <div className="relative flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-green-500/20 ">
                            <div className="relative"></div>
                            <h2 className="text-2xl font-semibold text-left">
                                <span className="text-gray-300 font-light">{t('payment.salesReport.title')}</span>
                                <span className="text-green-400 text-4xl font-bold block mt-2">{t('payment.salesReport.amount')}</span>
                            </h2>

                            <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
                                <Image src="/icons/Activity 2.png" alt="logo" width={24} height={24} />
                                {t('payment.salesReport.increase')}
                            </span>

                            <div className="w-full h-[300px] mt-6 bg-[url('/grafic2.png')] bg-center bg-contain bg-no-repeat"></div>
                        </div>

                        <div className="absolute bottom-15  left-1/2 transform -translate-x-1/2">
                            <div className="bg-gray-500 rounded-lg shadow-md p-4 flex items-center space-x-10 max-w-xs">
                                <div className="flex-shrink-0">
                                    <img src="/icons/card.png" alt="Card" className="w-12 h-12 p-3 bg-white rounded-lg" />
                                </div>

                                <div className="flex flex-col w-[200px] gap-5 border-l-2 border-green-500 pl-5">
                                    <div className="text-sm text-gray-600">{t('payment.revenue.title')}</div>
                                    <div className="text-lg font-bold">{t('payment.revenue.amount')}</div>
                                    <div className="text-sm text-green-500 gap-3 flex items-center">
                                        <span>{t('payment.revenue.increase')}</span>
                                        <span className="ml-1">{t('payment.revenue.period')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[url(/bgLastPayment.png)] flex-col lg:flex-row max-w-screen-xl mx-auto bg-no-repeat bg-top-left gap-5 rounded-2xl p-10 mb-10 border-1 border-gray-500 flex">
                    <h2 className="flex-1 text-3xl mt-20">{t('payment.development.title')}</h2>
                    <div className="flex flex-col gap-10 py-10 items-center text-xl lg:text-2xl flex-1">
                        <Link href={"#"} 
                            className=" bg-linear-30 from-[#2E727A] w-fit to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
                        >{t('payment.development.buttons.whitepaper')}</Link>
                        <Link href="#" className="py-3 w-fit px-5 rounded-2xl border-2  border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300">
                            {t('payment.development.buttons.roadmap')}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row px-5 xl:px-0 gap-10 mt-20 mb-10">
                    <div className="flex-[1]">
                        <h2 className="text-2xl mt-10 font-bold"
                            style={{
                                textShadow: '1px 1px 10px #000'
                            }}
                        >{t('payment.security.title')}</h2>
                    </div>

                    <div className="flex-[2] text-[10px] xl:text-sm ">
                        <div className="flex border-b border-gray-500 py-4">
                            <span className="text-green-500 w-48 flex-shrink-0">{t('payment.security.features.monitoring.title')}</span>
                            <span>{t('payment.security.features.monitoring.description')}</span>
                        </div>

                        <div className="flex border-b border-gray-500 py-4">
                            <span className="text-green-500 w-48 flex-shrink-0">{t('payment.security.features.twoFactor.title')}</span>
                            <span>{t('payment.security.features.twoFactor.description')}</span>
                        </div>

                        <div className="flex border-b border-gray-500 py-4">
                            <span className="text-green-500 w-48 flex-shrink-0">{t('payment.security.features.ddos.title')}</span>
                            <span>{t('payment.security.features.ddos.description')}</span>
                        </div>

                        <div className="flex border-b border-gray-500 py-4">
                            <span className="text-green-500 w-48 flex-shrink-0">{t('payment.security.features.servers.title')}</span>
                            <span>{t('payment.security.features.servers.description')}</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}