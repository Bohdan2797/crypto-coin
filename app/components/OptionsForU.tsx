'use client'
import { useSlider } from "../hooks/useSlider";

export function OptionsForU() {
  const { sliderRef, isDown } = useSlider();

  return (
    <section className="w-full max-w-screen-2xl mx-auto min-h-screen">
      <h2
        className="text-4xl max-w-xl font-semibold px-5 xl:px-0"
        style={{
          textShadow: "1px 1px 10px #000",
        }}
      >
        Why is our blockchain the best option for you?
      </h2>

      <div
        ref={sliderRef}
        className="flex mt-10 gap-3 overflow-x-scroll snap-x snap-mandatory"
        style={{ 
          cursor: isDown ? 'grabbing' : 'grab',
          scrollBehavior: 'smooth', // Плавная прокрутка
        }}
      >
        <div className="bg-[#626a7e] bg-[url(/bgOptionULeft.png)] bg-no-repeat bg-contain bg-right-top py-10 rounded-2xl pb-20 shadow-2xl snap-center flex-shrink-0 w-full md:w-1/2">
          <div className="flex py-5">
            <span className="text-green-500 font-bold text-sm pl-5">01</span>
            <span className="text-sm font-bold">/ 02</span>
          </div>
          <div className="pl-4 border-l-2 border-[#4B5265] ml-5 space-y-23">
            <h2 className="text-4xl">Low Transaction Costs</h2>
            <span className="text-2xl pr-3">
              By optimizing network resources, BaseCore offers ultra-low transaction fees, making it cost-effective for microtransactions and large-scale operations alike.
            </span>
          </div>
        </div>
        <div className="py-10 pb-20 rounded-2xl bg-no-repeat bg-cover bg-bottom shadow-2xl snap-center flex-shrink-0 w-full md:w-1/2" style={{
          backgroundImage: "linear-gradient(30deg, #2E727A, #2E7A), url(/bgOptionURight.png)",
          backgroundBlendMode: "overlay",
        }}>
          <div className="flex py-5">
            <span className="text-green-500 font-bold text-sm pl-5">02</span>
            <span className="text-sm font-bold">/ 02</span>
          </div>
          <div className="pl-4 border-l-1 ml-5 space-y-23">
            <h2 className="text-4xl">Privacy Features</h2>
            <span className="text-2xl text-[#fff1ff]">
              BaseCore integrates optional privacy protocols, allowing users to conduct confidential transactions when needed. Balances transparency with privacy for diverse use cases.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-26">
        <h2
          className="text-2xl max-w-5xl font-semibold"
          style={{
            textShadow: "1px 1px 10px #000",
          }}
        >
          Blockchain BaseCore assumes rewards for block validation to two
          participants in the network
        </h2>
        <div className="w-full flex flex-col items-end mt-4">
          <div className="flex flex-col items-start gap-y-2">
            {" "}
            {/* Используем flex-col для вертикального расположения */}
            <div className="flex gap-x-2">
              <span className="text-green-500 text-sm pt-2">01</span>
              <span className="text-lg">stackers</span>
            </div>
            <div className="flex gap-x-2">
              <span className=" text-green-500 text-sm pt-2">02</span>
              <span className="text-lg">masternodes</span>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-green-500 rounded-2xl mt-20 mb-10 flex gap-20 px-10 pt-6 pb-3">
          <div className="text-xl font-semibold">
            <h2
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              Stakers and masternodes receive rewards for block validation
            </h2>
          </div>
          <div className="w-full">
            {/* Первый блок */}
            <div className="border-b-2 border-green-500 flex justify-between items-center pt-3 pb-5 gap-30">
              <span className="text-xl font-bold text-nowrap text-green-500">
                0.5 BCE
              </span>
              <span className="flex-1 pl-5">
                Is generated every minute, with 0.005 BCE allocated to stakers
              </span>
            </div>
            {/* Второй блок */}
            <div className="flex justify-between items-center py-5 gap-30">
              <span className="text-xl font-bold text-nowrap text-green-500">
                1:99 ratio
              </span>
              <span className="flex-1 ">
                Division with 0.495 BCE allocated to masternodes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
