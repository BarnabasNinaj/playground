import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { contentSK } from '../data/contentSK'
import { contentCZ } from '../data/contentCZ'
import { songs } from '../data/songs'
import { UI } from '../data/constants'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'playground-language'
const LANGS = ['SK', 'CZ', 'EN']

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    /* ignore */
  }
  return 'SK'
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* ignore */
    }
  }, [language])

  const setLanguage = (lang) => {
    if (LANGS.includes(lang)) setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const i = LANGS.indexOf(prev)
      return LANGS[(i + 1) % LANGS.length]
    })
  }

  // UI copy + activities/tips stay SK/CZ; EN falls back to SK for those.
  const uiLanguage = language === 'CZ' ? 'CZ' : 'SK'

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      content: [
        ...(uiLanguage === 'CZ' ? contentCZ : contentSK),
        ...songs.filter((s) => s.lang === language),
      ],
      t: UI[uiLanguage],
    }),
    [language, uiLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
