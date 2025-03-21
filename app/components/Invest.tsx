'use client'
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

export function Invest() {
  const { t } = useTranslation();
  
  return (
    <section className="w-full max-w-screen-2xl min-h-screen mx-auto">
      <h2
        className="text-2xl px-5 mt-10 lg:mt-0 xl:text-4xl xl:w-5xl"
        style={{
          textShadow: "1px 1px 10px #000",
        }}
      >
        {t('invest.mainTitle')}
        <span className="text-green-500">
          {t('invest.highlight')}
        </span>
        {t('invest.subtitle')}
      </h2>
      <div className="flex flex-col lg:flex-row mt-15">
        <div className="flex-1 ">
          <Image
            src="/logo2.png"
            alt="logo"
            width={350}
            height={350}
            className="mx-auto"
          />
        </div>
        <div className="flex-1 text-xs sm:text-sm lg:text-xl grid grid-cols-2 px-3 gap-4">
          <div className="flex flex-col gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image
              src="/icons/calender.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span>{t('invest.features.daily')}</span>
          </div>
          <div className="flex flex-col gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/grafick.png" alt="logo" width={40} height={40} />
            <span>{t('invest.features.proportion')}</span>
          </div>
          <div className="flex flex-col gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/circkle.png" alt="logo" width={40} height={40} />
            <span>{t('invest.features.calculation')}</span>
          </div>
          <div className="flex flex-col gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/dollar.png" alt="logo" width={40} height={40} />
            <span>{t('invest.features.more')}</span>
          </div>
        </div>
      </div>
      <div className="flex relative justify-center items-center w-full py-20">
        <div className="flex flex-col lg:flex-row flex-wrap w-full gap-30 p-12">
          <div className="flex-1 font-exo text-4xl text-left">
            <h2
              className="font-semibold"
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              {t('invest.balance.title')}
            </h2>
            <ul className="mt-16 space-y-4 text-xl text-gray-300">
              <li>- {t('invest.balance.points.first')}</li>
              <li>- {t('invest.balance.points.second')}</li>
              <li>- {t('invest.balance.points.third')}</li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-green-500/20">
            <h2 className="text-2xl font-semibold text-left">
              <span className="text-gray-300 font-light">{t('invest.salesReport.title')}</span>
              <span className="text-green-400 text-4xl font-bold block mt-2">
                {t('invest.salesReport.amount')}
              </span>
            </h2>

            <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
              <Image
                src="/icons/Activity 2.png"
                alt="logo"
                width={24}
                height={24}
              />
              {t('invest.salesReport.increase')}
            </span>

            <div className="w-full h-[300px] mt-6 bg-[url('/grafic2.png')] bg-center bg-contain bg-no-repeat"></div>
          </div>
        </div>

        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 w-full max-w-[350px] sm:max-w-[400px] px-4">
          <div className="bg-gray-500 rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:space-x-10 space-y-4 sm:space-y-0">
            <div className="flex-shrink-0">
              <img
                src="/icons/card.png"
                alt="Card"
                className="w-12 h-12 p-3 bg-white rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-5 sm:border-l-2 sm:border-green-500 sm:pl-5 text-center sm:text-left">
              <div className="text-sm text-gray-600">{t('invest.revenue.title')}</div>
              <div className="text-lg font-bold">{t('invest.revenue.amount')}</div>
              <div className="text-sm text-green-500 flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                <span>{t('invest.revenue.increase')}</span>
                <span>{t('invest.revenue.period')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full py-20">
        <div className="flex flex-wrap flex-col md:flex-row w-full gap-30 p-12">
          <div className="flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-blue-400/20">
            <h2 className="text-2xl font-semibold text-left">
              <span className="text-gray-300 font-light">{t('invest.monthlyProfit.title')}</span>
              <span className="text-green-400 text-4xl font-bold block mt-2">
                {t('invest.monthlyProfit.amount')}
              </span>
            </h2>

            <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
              <Image
                src="/icons/Activity 2.png"
                alt="logo"
                width={24}
                height={24}
              />
              {t('invest.monthlyProfit.increase')}
            </span>
            <div className="w-full h-[300px] mt-6 bg-[url('/rectangle.png')] bg-center bg-contain bg-no-repeat"></div>
          </div>

          <div className="flex-1 font-exo text-4xl text-left">
            <h2
              className="font-semibold"
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              {t('invest.income.title')}
            </h2>
            <ul className="mt-16 space-y-4 text-xl text-gray-300">
              <li>- {t('invest.income.points.first')}</li>
              <li>- {t('invest.income.points.second')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-20 bg-[url(/bgInvest.png)] bg-no-repeat bg-left-top border-1 border-gray-500 rounded-2xl shadow-xl shadow-green-500/20 mb-20">
        <div className="flex flex-wrap w-full gap-30 p-12">
          <div className="flex flex-1 flex-col text-3xl xl:text-4xl py-3 gap-y-10">
            <span>{t('invest.join.title')}</span>
            <span className="text-2xl font-exo">
              {t('invest.join.subtitle')}
            </span>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-y-5 text-xl lg:text-2xl xl:text-4xl [&_span]:text-green-500 [&_span]:text-xl">
              <li>
                <span>01 </span>{t('invest.join.steps.first')}
              </li>
              <Link
                href="#"
                className="w-fit ml-[35px] bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-10 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
              >
                {t('invest.join.register')}
              </Link>
              <li>
                <span>02 </span>{t('invest.join.steps.second')}
              </li>
              <li>
                <span>03 </span>{t('invest.join.steps.third')}
              </li>
              <li>
                <span>04 </span>{t('invest.join.steps.fourth')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
