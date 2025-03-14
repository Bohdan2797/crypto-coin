export function OptionsForU () {
    return(
        <section className="w-full max-w-screen-2xl mx-auto min-h-screen">
            <h2 className="text-4xl max-w-xl font-semibold"
            style={{
                textShadow: '1px 1px 10px #000'
            }}
            >Why is our blockchain the best option for you?</h2>
            <div className="flex mt-10 gap-3">
                <div className="bg-[#626a7e] bg-[url(/bgOptionULeft.png)] bg-no-repeat bg-contain  bg-right-top py-10 rounded-2xl pb-20 shadow-2xl">
                    <div className="pl-4 border-l-2 border-[#4B5265] ml-5 space-y-23">
                    <h2 className="text-4xl">Low Transaction Costs </h2>
                    <span className="text-2xl pr-3">By optimizing network resources, BaseCore offers ultra-low transaction fees, making it cost-effective for microtransactions and large-scale operations alike.</span>
                    </div>
                </div>
                <div 
  className="py-10 pb-20 rounded-2xl bg-no-repeat bg-cover bg-bottom shadow-2xl"
  style={{ 
    backgroundImage: "linear-gradient(30deg, #2E727A, #2E7A), url(/bgOptionURight.png)",
    backgroundBlendMode: "overlay"
  }}
>
                    <div className="pl-4 border-l-1 ml-5 space-y-23 ">
                    <h2 className="text-4xl"> Privacy Features </h2>
                    <span className="text-2xl text-[#fff1ff] ">BaseCore integrates optional privacy protocols, allowing users to conduct confidential transactions when needed.
                    Balances transparency with privacy for diverse use cases.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}