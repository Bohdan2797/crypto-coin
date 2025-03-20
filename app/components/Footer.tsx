'use client'

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";

export function Footer() {
    const { t } = useTranslation();
    return (
        <section className="max-w-screen-2xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Левый блок: Логотип и название */}
                <div className="flex items-center gap-3">
                    <Image src='/logo2.png' alt='logo BaseCore' width={200} height={200} />
                    <h2 className="text-2xl pb-8 sm:text-3xl font-bold">BaseCore</h2>
                </div>

                {/* Центральный блок: Ссылки и документы */}
                <div className="flex gap-10 flex-1 justify-center">
                    {/* Блок "About the coin" */}
                    <div>
                        <h2 className="text-lg font-semibold">{t('footerNew.aboutCoin.title')}</h2>
                        <ul className="space-y-2 mt-4">
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.income')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.howToBuy')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.roadmap')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.blog')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.technology')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.wallet')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.team')}</Link></li>
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.aboutCoin.links.news')}</Link></li>
                        </ul>
                    </div>

                    {/* Блок "Documents" */}
                    <div>
                        <h2 className="text-lg font-semibold">{t('footerNew.documents.title')}</h2>
                        <ul className="space-y-2 mt-4">
                            <li><Link href="#" className="hover:text-[#2E7A] transition-colors">{t('footerNew.documents.whitepaper')}</Link></li>
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
                            {t('footerNew.contact.email')}
                        </span>
                        <span className="flex items-center gap-2">
                            <Image src='/iconsFooter/email.png' alt='email' width={24} height={24} />
                            {t('footerNew.contact.email')}
                        </span>
                    </div>

                    {/* Десктопные кошельки */}
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <h2 className="text-lg font-semibold">{t('footerNew.desktopWallets.title')}</h2>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/icons/windows.png' alt={t('footerNew.desktopWallets.windows')} width={30} height={30} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/icons/linux.png' alt={t('footerNew.desktopWallets.linux')} width={30} height={30} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/icons/macos.png' alt={t('footerNew.desktopWallets.macos')} width={30} height={30} />
                            </Link>
                        </div>
                    </div>

                    {/* Соцсети */}
                    <div>
                        <h2 className="text-lg font-semibold">{t('footerNew.social.title')}</h2>
                        <div className="flex justify-center items-center lg:justify-start lg:items-start gap-4 mt-2">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/iconsFooter/linkid.png' alt={t('footerNew.social.linkedin')} width={30} height={30} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/iconsFooter/twitter.png' alt={t('footerNew.social.twitter')} width={30} height={30} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src='/iconsFooter/telegram2.png' alt={t('footerNew.social.telegram')} width={30} height={30} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}