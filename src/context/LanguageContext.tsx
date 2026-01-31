import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.features': { en: 'Features', ar: 'المميزات' },
  'nav.pricing': { en: 'Pricing', ar: 'الأسعار' },
  'nav.about': { en: 'About', ar: 'من نحن' },
  'nav.contact': { en: 'Contact', ar: 'تواصل معنا' },
  'nav.build': { en: 'Build Your App', ar: 'ابني تطبيقك' },
  'nav.startTrial': { en: 'Start Free Trial', ar: 'ابدأ تجربة مجانية' },
  
  // Common
  'common.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },
  'common.getStarted': { en: 'Get Started', ar: 'ابدأ الآن' },
  'common.submit': { en: 'Submit', ar: 'إرسال' },
  'common.back': { en: 'Back', ar: 'رجوع' },
  'common.next': { en: 'Next', ar: 'التالي' },
  'common.continue': { en: 'Continue', ar: 'متابعة' },
  
  // Footer
  'footer.product': { en: 'Product', ar: 'المنتج' },
  'footer.company': { en: 'Company', ar: 'الشركة' },
  'footer.legal': { en: 'Legal', ar: 'قانوني' },
  'footer.support': { en: 'Support', ar: 'الدعم' },
  'footer.newsletter': { en: 'Stay updated', ar: 'ابق على اطلاع' },
  'footer.newsletterDesc': { en: 'Get the latest news and product updates.', ar: 'احصل على آخر الأخبار وتحديثات المنتج.' },
  'footer.subscribe': { en: 'Subscribe', ar: 'اشترك' },
  'footer.enterEmail': { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
  'footer.rights': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.madeWith': { en: 'Made with', ar: 'صنع بـ' },
  'footer.inEgypt': { en: 'in Egypt', ar: 'في مصر' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('wk-hub-language')
    return (saved as Language) || 'en'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('wk-hub-language', lang)
  }

  const isRTL = language === 'ar'

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    document.body.style.fontFamily = isRTL 
      ? '"Cairo", "Tajawal", "Inter", sans-serif' 
      : '"Inter", sans-serif'
  }, [language, isRTL])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
