"use client";

// context/LanguageContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';
import { SupportedLanguages } from '../types/translation';

interface LanguageContextType {
	language: SupportedLanguages;
	setLanguage: (lang: SupportedLanguages) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
	children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<SupportedLanguages>('en');
	
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
