'use client'
import { useSlider } from "../hooks/useSlider";
import { useTranslation } from "../hooks/useTranslation";

export function MakingPass() {
    const { sliderRef } = useSlider();
    const { t } = useTranslation();

    return (
        <section className="bg-[url(/bgMakingPassive.png)] bg-no-repeat bg-right-top bg-cover xl:bg-contain w-full min-h-min pb-20 mb-5 mt-30 pt-5 px-5">
            <div className="max-w-screen-2xl mx-auto w-full">
                <h2 className="text-xl px-5 lg:text-5xl xl:w-5xl mt-14" style={{ textShadow: "1px 1px 10px #000" }}>
                    {t('passive.title')}
                </h2>
                <div 
                    ref={sliderRef} 
                    className="flex gap-3 mt-20 mb-20 py-5 items-center overflow-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing lg:justify-center">
                    <div className="hidden xl:block w-1/4"></div>
                    <div className="flex flex-col p-3 bg-gray-700/50 rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-xs min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            {t('passive.cards.stacker.title')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.stacker.required.label')}</span>
                            {t('passive.cards.stacker.required.value')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.stacker.reward.label')}</span>
                            {t('passive.cards.stacker.reward.value')}
                        </span>
                    </div>

                    <div className="flex flex-col p-3 bg-gray-700/50 rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-xs min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold bg-linear-30 from-[#2E7A] to-[#2E727A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E727A] hover:to-[#2E7A] duration-300 transition-colors">
                            {t('passive.cards.masternode.title')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.masternode.required.label')}</span>
                            {t('passive.cards.masternode.required.value')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.masternode.reward.label')}</span>
                            {t('passive.cards.masternode.reward.value')}
                        </span>
                    </div>

                    <div className="flex flex-col p-3 bg-gray-700/50  rounded-3xl gap-y-3 transform transition-colors hover:bg-gray-700/75 duration-300 w-full max-w-xs min-w-[250px] snap-start flex-shrink-0">
                        <span className="font-bold text-nowrap bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors">
                            {t('passive.cards.masternodeInstant.title')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.masternodeInstant.required.label')}</span>
                            {t('passive.cards.masternodeInstant.required.value')}
                        </span>
                        <span className="flex flex-col font-bold text-gray-300 py-3 px-5">
                            <span className="text-xs font-light text-gray-500">{t('passive.cards.masternodeInstant.reward.label')}</span>
                            {t('passive.cards.masternodeInstant.reward.value')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
