import Image from "next/image"
export function Invest() {
    return(
        <section className="w-full max-w-screen-2xl min-h-screen mx-auto">
            <h2 className="text-4xl w-5xl">The most affordable way with an entry threshold of just 0.001 BCE is
                <span className="text-green-500"> to invest in an instant masternode</span>, which partakes in network block validation.
            </h2>
            <div className="flex mt-15">
                <div className="flex-1 ">
                    <Image src="/logo2.png" alt="logo" width={350} height={350} className="mx-auto" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
                        <Image src="/icons/calender.png" alt="logo" width={40} height={40} />
                        <span>Rewards for generating new blocks are accrued daily</span>
                    </div>
                    <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
                        <Image src="/icons/grafick.png" alt="logo" width={40} height={40} />
                        <span>Rewards grow in proportion to the number of BCE coins invested</span>
                    </div>
                    <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
                        <Image src="/icons/circkle.png" alt="logo" width={40} height={40} />
                        <span>Rewards are calculated based on the number of coins invested in the masternode</span>
                    </div>
                    <div className="flex flex-col  gap-y-3 text-left bg-gray-800 p-4 rounded-2xl">
                        <Image src="/icons/dollar.png" alt="logo" width={40} height={40} />
                        <span>The more you invest in BCE – the more rewards you will receive</span>
                    </div>
                    </div>
            </div>
            <div className="flex justify-center items-center w-full py-20">
  <div className="flex flex-wrap  w-full gap-30 p-12 ">
    
    {/* Левая часть */}
    <div className="flex-1  font-exo  text-4xl text-left">
      <h2 className="font-semibold ">Every day, your balance</h2>
      <ul className="mt-16 space-y-4  text-xl text-gray-300">
        <li>- Will receive a reward for</li>
        <li>- Generating new blocks in the blockchain</li>
        <li>- Will receive a reward for generating new blocks in the blockchain</li>
      </ul>
    </div>

    {/* Правая часть */}
    <div className="flex-1 flex flex-col bg-gray-700/50 rounded-2xl px-6 py-2 ">
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
  </div>
</div>

        </section>
    )
}