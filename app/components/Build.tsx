import Image from "next/image";

export function BuildPage () {
    return (
      <section className="">
      <div className="min-h-screen mx-auto max-w-screen-2xl mt-10" >
        <div className="flex gap-4 border-b-1 border-gray-400  pb-14">
          <div className="flex flex-col flex-1 gap-y-10  mt-10 p-4 justify-between [&>h2]:text-2xl [&>span]:text-gray-400 border-r-1 border-gray-400 ">
            <h2>BaseCore Fork</h2>
            <span>on Proof of Stake Consensus</span>
          </div>
          <div className="flex flex-col  gap-y-10 flex-1  mt-10 p-4 justify-between [&>h2]:text-2xl [&>span]:text-gray-400 border-r-1 border-gray-400 ">
            <h2>Minimum investment amount</h2>
            <span>from 0.0001 BCE</span>
          </div>
          <div className="flex flex-col flex-1 gap-y-10  mt-10 p-4 justify-between [&>h2]:text-2xl [&>span]:text-gray-400">
            <h2>Stablecoin, the price is always</h2>
            <span>equal to BCE</span>
          </div>
        </div>
        <div className="flex flex-row gap-x-10 mt-14  items-top">
          <span className="text-[#00E983] text-3xl font-semibold">Advantage</span>
          <span className="w-[55%] text-2xl font-exo">
          BaseCore leverages advanced cryptographic protocols and decentralized consensus mechanisms to ensure tamper-proof transactions and data integrity. Immune to single points of failure, making it highly resistant to hacks and fraud.          </span>
        </div>
        <div className="flex mt-5 ">
        <div className="flex flex-col gap-y-3 pl-20 w-[500px] max-w-sm">
    <Image src='/users-icon.svg' alt='user friendly' width={30} height={30} />
    <span className=" ">
      Scalability Without Compromise  
      Built to handle high transaction volumes with low latency, BaseCore ensures seamless performance even during peak demand.
    </span>
    <span className="">
      Utilizes innovative layer-2 solutions or sharding to maintain speed and efficiency as the network grows.
    </span>
  </div>
          <div className="w-full flex h-[350px]">
  {/* Первый блок с картинкой сверху */}
  <div className="flex flex-col flex-1 bg-gray-500 gap-y-10 rounded-2xl shadow-2xl relative left-7 z-10 ">
  <div className="relative w-full h-[188px] rounded-t-2xl ">
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
      BaseCore simplifies blockchain adoption with intuitive interfaces, developer-friendly tools, and seamless integration for businesses and end-users.
      Reduces the complexity of blockchain technology, making it accessible to everyone.
    </span>
  </div>

  {/* Второй блок с картинкой снизу */}
  <div className="flex flex-col flex-1 bg-[#373D4E] gap-y-10 rounded-2xl shadow-xl">
    <span className="pl-8 pr-3 py-2 flex-1">
      BaseCore employs a sustainable consensus mechanism (e.g., Proof-of-Stake or hybrid models) to minimize energy consumption while maintaining network security.
      Ideal for eco-conscious projects and enterprises.
    </span>
    <div className="relative w-full h-[188px] rounded-t-2xl ">
  <Image 
    src="/bgFromCard.png" 
    alt="Background" 
    layout="fill" 
    objectPosition="bottom" 
    objectFit="cover" 
    className="rounded-t-2xl scale-y-[-1] "
  />
</div>
  </div>
</div>

        </div>
      </div>
  </section>
    )
}