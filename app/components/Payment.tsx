export function Payment () {
    return(
        <section className="mx-auto max-w-screen-2xl ">
            <div className="flex  items-center gap-10 mb-30">
                <h2 className="text-green-500 text-4xl">Goals </h2>
                <span className="text-3xl">We plan <span className="text-green-500"> to create an ecosystem of services </span> that will allow integrating BaseCore into people's everyday lives</span>
            </div>
            <section>
                <div className="flex flex-col font-exo gap-10">
                    <h2 className="text-5xl w-2xl">Payment for services and goods</h2>
                    <h3 className="text-green-500 text-2xl">Payment for services and goods</h3>
                </div>
                <div className="flex ">
                    <div className="flex-[1.5]  flex flex-col">
                        <span>We are planning to create an ecosystem of services that will allow the integration of BaseCore into everyday life</span>
                        <span><span> 01 
                            </span> / 03</span>
                    </div>
                    <div className="flex-[1.5]  flex flex-col">
                        <span>We are planning to create an ecosystem of services that will allow the integration of BaseCore into everyday life</span>
                        <span><span> 02 
                            </span> / 03</span>
                    </div>
                    <div className="flex-[2] flex flex-col bg-[#0073E5]">
                            <span>Payment facilities will be integrated in popular store transaction processing systems like Bitrix, Joomla, WordPress, Tilda, Shopify and others</span>
                            <div>
                                <span>
                                    <span> 02 </span> / 03  
                                    {/* добавить перчень картинок вниз справа  */}
                                </span>
                            </div>
                    </div>
                </div>
            </section>
        </section>
    )
}