import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { contentSK } from '../data/contentSK'
import { contentCZ } from '../data/contentCZ'
import { UI } from '../data/constants'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'playground-language'

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'CZ' ? 'CZ' : 'SK'
    } catch {
      return 'SK'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* ignore */
    }
  }, [language])

  const setLanguage = (lang) => {
    if (lang === 'SK' || lang === 'CZ') setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'SK' ? 'CZ' : 'SK'))
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      content: language === 'CZ' ? contentCZ : contentSK,
      t: UI[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
