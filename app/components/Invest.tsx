import Image from "next/image";
import Link from "next/link";
export function Invest() {
  return (
    <section className="w-full max-w-screen-2xl min-h-screen mx-auto">
      <h2
        className="text-2xl px-5 mt-10 lg:mt-0 xl:text-4xl xl:w-5xl"
        style={{
          textShadow: "1px 1px 10px #000",
        }}
      >
        The most affordable way with an entry threshold of just 0.001 BCE is
        <span className="text-green-500">
          {" "}
          to invest in an instant masternode
        </span>
        , which partakes in network block validation.
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
        <div className="flex-1 grid grid-cols-2 px-3 gap-4">
          <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image
              src="/icons/calender.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span>Rewards for generating new blocks are accrued daily</span>
          </div>
          <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/grafick.png" alt="logo" width={40} height={40} />
            <span>
              Rewards grow in proportion to the number of BCE coins invested
            </span>
          </div>
          <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/circkle.png" alt="logo" width={40} height={40} />
            <span>
              Rewards are calculated based on the number of coins invested in
              the masternode
            </span>
          </div>
          <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
            <Image src="/icons/dollar.png" alt="logo" width={40} height={40} />
            <span>
              The more you invest in BCE – the more rewards you will receive
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative justify-center items-center w-full py-20">
        <div className="flex flex-wrap  w-full gap-30 p-12 ">
          {/* Левая часть */}
          <div className="flex-1  font-exo   text-4xl text-left">
            <h2
              className="font-semibold "
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              Every day, your balance
            </h2>
            <ul className="mt-16 space-y-4  text-xl text-gray-300">
              <li>- Will receive a reward for</li>
              <li>- Generating new blocks in the blockchain</li>
              <li>
                - Will receive a reward for generating new blocks in the
                blockchain
              </li>
            </ul>
          </div>

          {/* Правая часть */}
          <div className="flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-green-500/20 ">
            <h2 className="text-2xl font-semibold text-left">
              <span className="text-gray-300 font-light">Sales Report</span>
              <span className="text-green-400 text-4xl font-bold block mt-2">
                4.65 K
              </span>
            </h2>

            <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
              <Image
                src="/icons/Activity 2.png"
                alt="logo"
                width={24}
                height={24}
              />
              +7.5%
            </span>

            {/* График */}
            <div className="w-full h-[300px] mt-6 bg-[url('/grafic2.png')] bg-center bg-contain bg-no-repeat"></div>
          </div>
        </div>

        <div className="absolute bottom-15  left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-500 rounded-lg shadow-md p-4 flex items-center space-x-10 max-w-xs">
            {/* Изображение карты */}
            <div className="flex-shrink-0">
              <img
                src="/icons/card.png"
                alt="Card"
                className="w-12 h-12 p-3 bg-white rounded-lg"
              />
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

      <div className="flex justify-center items-center w-full py-20">
        <div className="flex flex-wrap  w-full gap-30 p-12 ">
          <div className="flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 shadow-xl shadow-blue-400/20 ">
            <h2 className="text-2xl font-semibold text-left">
              <span className="text-gray-300 font-light">Monthly Profit</span>
              <span className="text-green-400 text-4xl font-bold block mt-2">
                $1 250,98
              </span>
            </h2>

            <span className="flex items-center mx-auto gap-4 text-green-400 text-2xl font-semibold mt-4">
              <Image
                src="/icons/Activity 2.png"
                alt="logo"
                width={24}
                height={24}
              />
              +1.5%
            </span>
            <div className="w-full h-[300px] mt-6 bg-[url('/rectangle.png')] bg-center bg-contain bg-no-repeat"></div>
          </div>

          <div className="flex-1  font-exo   text-4xl text-left">
            <h2
              className="font-semibold "
              style={{
                textShadow: "1px 1px 10px #000",
              }}
            >
              What does income depend on?
            </h2>
            <ul className="mt-16 space-y-4  text-xl text-gray-300">
              <li>
                - The reward is calculated depending on the number of coins
                invested in the masternode.
              </li>
              <li>
                - The more you invest in BCE, the more rewards you will receive
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-20 bg-[url(/bgInvest.png)] bg-no-repeat bg-left-top border-1 border-gray-500 rounded-2xl shadow-xl shadow-green-500/20 mb-20">
        <div className="flex flex-wrap  w-full gap-30 p-12 ">
          <div className="flex flex-1 flex-col text-4xl py-3 gap-y-10">
            <span>How to join an instant masternode?</span>
            <span className="text-2xl font-exo">
              The easiest way is to join through a pool on the BCE2um.com
              exchange.
            </span>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-y-5 text-3xl [&_span]:text-green-500 [&_span]:text-xl">
              <li>
                <span>01 </span>Register on the exchange
              </li>
              <Link
                href="#"
                className="w-fit ml-[35px] bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-10 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
              >
                REGISTER
              </Link>
              <li>
                <span>02 </span>Buy BCE coins
              </li>
              <li>
                <span>03 </span>Send coins to masternode
              </li>
              <li>
                <span>04 </span>Wait for the reward
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
