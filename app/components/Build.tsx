'use client';

import Image from "next/image";
import { useTranslation } from '../hooks/useTranslation';

export function BuildPage() {
  const { t } = useTranslation();

  return (
    <section className="">
      <div className="mx-auto max-w-screen-2xl mb-20 mt-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:border-b-1 border-gray-400 pb-14">
          <div className="flex flex-col flex-1 gap-y-10 mt-10 p-4 justify-between [&>h2]:text-2xl [&>span]:text-gray-400 border-b-1 lg:border-b-0 lg:border-r-1 border-gray-400">
            <h2>{t('build.fork.title')}</h2>
            <span>{t('build.fork.subtitle')}</span>
          </div>
          <div className="flex flex-col gap-y-10 flex-1 mt-10 p-4 justify-between [&>h2]:text-2xl [&>span]:text-gray-400 border-b-1 lg:border-b-0 lg:border-r-1 border-gray-400">
            <h2>{t('build.investment.title')}</h2>
            <span>{t('build.investment.subtitle')}</span>
          </div>
          <div className="flex flex-col flex-1 gap-y-10 mt-10 p-4 justify-between [&>h2]:text-2xl border-b-1 border-gray-400 lg:border-0 [&>span]:text-gray-400">
            <h2>{t('build.stablecoin.title')}</h2>
            <span>{t('build.stablecoin.subtitle')}</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-5 mb-10 items-center xl:flex-row xl:gap-x-10 mt-14 xl:items-top">
          <span className="text-[#00E983] text-3xl font-semibold">
            {t('build.advantage.title')}
          </span>
          <span className="w-full px-5 lg:w-[800px] text-2xl font-exo">
            {t('build.advantage.description')}
          </span>
        </div>
        <div className="flex flex-col xl:flex-row mt-5">
          <div className="flex flex-col gap-y-3 lg:pl-20 px-5 lg:px-0 mx-a max-w-xl">
            <Image
              src="/users-icon.svg"
              alt="user friendly"
              width={30}
              height={30}
            />
            <span>
              {t('build.scalability.title')} {t('build.scalability.description')}
            </span>
            <span>
              {t('build.scalability.subdescription')}
            </span>
          </div>
          <div className="w-full flex-col xl:flex-row flex px-5 gap-5 mt-5 xl:gap-0 xl:mt-0">
            {/* Первый блок с картинкой сверху */}
            <div className="flex flex-col flex-1 bg-gray-500 gap-y-10 rounded-2xl shadow-2xl relative xl:left-7 z-10">
              <div className="relative w-full h-[188px] rounded-t-2xl">
                <Image
                  src="/bgFromCard.png"
                  alt="Background"
                  layout="fill"
                  objectPosition="bottom"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <span className="px-3 pb-2 flex-1">
                {t('build.cards.userFriendly.description')}
              </span>
            </div>

            {/* Второй блок с картинкой снизу */}
            <div className="flex flex-col flex-1 bg-[#373D4E] gap-y-10 rounded-2xl shadow-xl">
              <span className="pl-8 pr-3 py-2 flex-1">
                {t('build.cards.ecoFriendly.description')}
              </span>
              <div className="relative w-full h-[188px] rounded-t-2xl">
                <Image
                  src="/bgFromCard.png"
                  alt="Background"
                  layout="fill"
                  objectPosition="bottom"
                  objectFit="cover"
                  className="rounded-t-2xl scale-y-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
