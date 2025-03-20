'use client'
import { useSlider } from "../hooks/useSlider";
import { useTranslation } from "../hooks/useTranslation";

export function OptionsForU() {
  const { sliderRef, isDown } = useSlider();
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-screen-2xl mx-auto min-h-screen">
      <h2
        className="text-4xl max-w-xl font-semibold px-5 xl:px-0"
        style={{
          textShadow: "1px 1px 10px #000",
        }}
      >
        {t('options.title')}
      </h2>

      <div
        ref={sliderRef}
        className="flex mt-10 gap-3 overflow-x-scroll px-5 snap-x snap-mandatory"
        style={{ 
          cursor: isDown ? 'grabbing' : 'grab',
          scrollBehavior: 'smooth',
        }}
      >
        <div className="bg-[#626a7e] bg-[url(/bgOptionULeft.png)] bg-no-repeat bg-contain bg-right-top py-10 rounded-2xl pb-20 shadow-2xl snap-center flex-shrink-0 w-full md:w-1/2">
          <div className="flex py-5">
            <span className="text-green-500 font-bold text-sm pl-5">{t('options.slider.first.number')}</span>
            <span className="text-sm font-bold">/ {t('options.slider.first.total')}</span>
          </div>
          <div className="pl-4 border-l-2 border-[#4B5265] ml-5 space-y-23">
            <h2 className="text-4xl">{t('options.slider.first.title')}</h2>
            <span className="text-2xl pr-3">
              {t('options.slider.first.description')}
            </span>
          </div>
        </div>
        <div className="py-10 pb-20 rounded-2xl bg-no-repeat bg-cover bg-bottom shadow-2xl snap-center flex-shrink-0 w-full md:w-1/2" style={{
          backgroundImage: "linear-gradient(30deg, #2E727A, #2E7A), url(/bgOptionURight.png)",
          backgroundBlendMode: "overlay",
        }}>
          <div className="flex py-5">
            <span className="text-green-500 font-bold text-sm pl-5">{t('options.slider.second.number')}</span>
            <span className="text-sm font-bold">/ {t('options.slider.second.total')}</span>
          </div>
          <div className="pl-4 border-l-1 ml-5 space-y-23">
            <h2 className="text-3xl">{t('options.slider.second.title')}</h2>
            <span className="text-2xl text-[#fff1ff]">
              {t('options.slider.second.description')}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-26">
        <h2
          className="text-2xl max-w-5xl px-5 font-semibold"
          style={{
            textShadow: "1px 1px 10px #000",
          }}
        >
          {t('options.rewards.title')}
        </h2>
        <div className="w-full flex flex-col items-start pl-5 lg:pr-5 lg:items-end mt-4">
          <div className="flex flex-col items-start gap-y-2">
            <div className="flex gap-x-2">
              <span className="text-green-500 text-sm pt-2">01</span>
              <span className="text-lg">{t('options.rewards.participants.first')}</span>
            </div>
            <div className="flex gap-x-2">
              <span className="text-green-500 text-sm pt-2">02</span>
              <span className="text-lg">{t('options.rewards.participants.second')}</span>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-green-500 rounded-2xl mt-20 mb-10 flex flex-col lg:flex-row gap-20 px-5 pt-6 pb-3">
          <div className="text-xl font-semibold">
            <h2
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              {t('options.rewards.info.title')}
            </h2>
          </div>
          <div className="w-full flex flex-col">
            <div className="border-b-2 border-green-500 flex flex-col lg:flex-row gap-10 justify-between items-center pt-3 pb-5 lg:gap-30">
              <span className="text-xl font-bold text-nowrap text-green-500">
                {t('options.rewards.info.firstBlock.amount')}
              </span>
              <span className="flex-1 pl-5">
                {t('options.rewards.info.firstBlock.description')}
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-between items-center py-5 lg:gap-30">
              <span className="text-xl font-bold text-nowrap text-green-500">
                {t('options.rewards.info.secondBlock.ratio')}
              </span>
              <span className="flex-1">
                {t('options.rewards.info.secondBlock.description')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
