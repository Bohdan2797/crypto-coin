'use client'
import Link from 'next/link'
import { useTranslation } from './hooks/useTranslation'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[url('/bgHeader.png')] bg-cover bg-center flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-[#22ee77dd]">404</h1>
        <h2 className="text-2xl font-semibold">{t('notFound.title')}</h2>
        <p className="text-gray-200 max-w-md mx-auto">
          {t('notFound.description')}
        </p>
        <Link 
          href="/"
          className="inline-block bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-8 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  )
} 