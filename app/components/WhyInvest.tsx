'use client'
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

export function WhyInvest() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-[#414757] min-h-screen">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="flex-1 p-4 gap-y-15 flex flex-col">
            <h2
              className="text-4xl font-bold mb-2"
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              {t('whyInvest.title')}
            </h2>
            <span className="ml-5 w-xs">
              <img
                src="/icons/sun.png"
                alt="sun icon"
                className="w-6 h-6 mr-2 mb-3"
              />
              <span className="flex items-center">
                {t('whyInvest.partnerships')}
              </span>
            </span>
          </div>

          <div className="flex-2 p-4 grid grid-cols-2 grid-rows-2 gap-10">
            <div className="[&_img]:mb-3">
              <img
                src="/icons/Btc.png"
                alt="sun icon"
                className="w-6 h-6 mr-2"
              />
              <span className="flex items-center">
                {t('whyInvest.partnerships')}
              </span>
            </div>

            <div className="[&_img]:mb-3">
              <img
                src="/icons/2-1.png"
                alt="sun icon"
                className="w-6 h-6 mr-2"
              />
              <span className="flex items-center">
                {t('whyInvest.partnerships')}
              </span>
            </div>

            <div className="[&_img]:mb-3">
              <img
                src="/icons/1-2.png"
                alt="sun icon"
                className="w-6 h-6 mr-2"
              />
              <span className="flex items-center">
                {t('whyInvest.partnerships')}
              </span>
            </div>

            <div className="[&_img]:mb-3">
              <img
                src="/icons/2-2.png"
                alt="sun icon"
                className="w-6 h-6 mr-2"
              />
              <span className="flex items-center">
                {t('whyInvest.partnerships')}
              </span>
            </div>
          </div>
        </div>
        <section className="mt-40">
          <h2
            className="text-4xl px-3 font-bold w-xs"
            style={{
              textShadow: "1px 1px 10px #000",
            }}
          >
            {t('whyInvest.security.title')}
          </h2>
          <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 gap-5">
            <div className="flex-1 flex px-5 lg:px-0 gap-5 items-end">
              <div className="border flex-1 border-gray-400 rounded-2xl p-5 flex flex-col justify-between h-[300px] xl:h-[250px]">
                <span className="text-lg font-medium">
                  {t('whyInvest.security.tokenPrice')}
                </span>
                <div className="flex justify-start">
                  <Image
                    src="/logo2.png"
                    alt="logo BaceCore icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="border flex-1 border-gray-400 rounded-2xl p-5 flex flex-col justify-between h-[300px] xl:h-[250px]">
                <span className="text-lg font-medium">{t('whyInvest.security.noRisks')}</span>
                <div className="flex justify-start">
                  <Image
                    src="/icons/Filter 5.png"
                    alt="filter icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 mx-5 lg:mx-0 bg-[#00E983]/50 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-lg font-medium">
                {t('whyInvest.security.realTimeAccess')}
              </span>

              <div className="flex items-end justify-between mt-4">
                <div className="flex items-end">
                  <Image
                    src="/bgIcons.png"
                    alt="background icons"
                    width={75}
                    height={75}
                  />
                </div>

                <div className="flex-1 flex justify-end">
                  <Image
                    src="/bgGreen.png"
                    alt="background green"
                    width={500}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-3 lg:px-0 gap-y-5 mt-5 gap-x-5">
            <div className="flex-[2]">
              <div className="bg-[#0073E5] rounded-2xl p-5 flex flex-col justify-between h-[250px]">
                <span className="text-lg font-medium">
                  {t('whyInvest.security.sellOptions')}
                </span>
                <div className="flex justify-start">
                  <Image
                    src="/icons/wallet.png"
                    alt="filter icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="flex-[1]">
              <div className="border border-gray-400 rounded-2xl p-5 h-[250px] flex flex-col justify-between">
                <span className="text-lg font-medium">
                  {t('whyInvest.security.sellOptions')}
                </span>
                <div className="flex justify-start">
                  <Image
                    src="/icons/clock.png"
                    alt="filter icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="flex-[1.5]">
              <div className="bg-[#8E94A7] rounded-2xl p-5 h-[250px] flex flex-col justify-between">
                <span className="text-lg font-medium">
                  {t('whyInvest.security.sellOptions')}
                </span>
                <div className="flex justify-start">
                  <Image
                    src="/icons/wallet.png"
                    alt="filter icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
