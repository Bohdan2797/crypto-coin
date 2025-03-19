import Image from "next/image";

export function Footer() {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Левый блок: Логотип и название */}
                <div className="flex items-center gap-4">
                    <Image src='/logo2.png' alt='logo BaseCore' width={200} height={200} />
                    <h2 className="text-3xl font-bold">BaseCore</h2>
                </div>

                {/* Центральный блок: Ссылки и документы */}
                <div className="flex gap-10 flex-1 justify-center">
                    {/* Блок "About the coin" */}
                    <div>
                        <h2 className="text-lg font-semibold">About the coin</h2>
                        <ul className="space-y-2 mt-4">
                            <li>Income</li>
                            <li>How to buy</li>
                            <li>Roadmap</li>
                            <li>Blog</li>
                            <li>Technology</li>
                            <li>Wallet</li>
                            <li>Team</li>
                            <li>News</li>
                        </ul>
                    </div>

                    {/* Блок "Documents" */}
                    <div>
                        <h2 className="text-lg font-semibold">Documents</h2>
                        <ul className="space-y-2 mt-4">
                            <li>Whitepaper</li>
                            <li>
                                <Image src='/iconsFooter/solus.png' alt='solus logo' width={50} height={50} />
                            </li>
                            <li>
                                <Image src='/iconsFooter/image.png' alt='coinmarketcap logo' width={100} height={50} />
                            </li>
                            <li>
                                <Image src='/iconsFooter/coincodex.png' alt='coindex logo' width={100} height={50} />
                            </li>
                            <li>
                                <Image src='/iconsFooter/b2.png' alt='solus logo' width={30} height={50} />
                            </li>
                            <li>
                                <Image src='/iconsFooter/hitbtc.png' alt='solus logo' width={70} height={50} />
                            </li>
                            <li>
                                <Image src='/iconsFooter/consbit.png' alt='solus logo' width={70} height={50} />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Правый блок: Контакты и соцсети */}
                <div className="flex flex-col items-center lg:items-start gap-4">
                    {/* Контакты */}
                    <div className="space-y-2">
                        <span className="flex items-center gap-2">
                            <Image src='/iconsFooter/email.png' alt='email' width={24} height={24} />
                            support@bceadd.io
                        </span>
                        <span className="flex items-center gap-2">
                            <Image src='/iconsFooter/email.png' alt='email' width={24} height={24} />
                            support@bceadd.io
                        </span>
                    </div>

                    {/* Десктопные кошельки */}
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <h2 className="text-lg font-semibold">Desktop Wallets</h2>
                        <div className="flex  gap-4 mt-2">
                            <Image src='/icons/windows.png' alt='app linux' width={30} height={30} />
                            <Image src='/icons/linux.png' alt='app linux' width={30} height={30} />
                            <Image src='/icons/macos.png' alt='app linux' width={30} height={30} />
                        </div>
                    </div>

                    {/* Соцсети */}
                    <div>
                        <h2 className="text-lg font-semibold">Find us on social media</h2>
                        <div className="flex justify-center items-center lg:justify-start lg:items-start gap-4 mt-2">
                            <Image src='/iconsFooter/linkid.png' alt='link id' width={30} height={30} />
                            <Image src='/iconsFooter/twitter.png' alt='x - twitter' width={30} height={30} />
                            <Image src='/iconsFooter/telegram2.png' alt='telegram' width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}