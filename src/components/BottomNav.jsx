import { Lightbulb, Music, Sparkles, Star } from 'lucide-react'
import { NAV_ITEMS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

const ICONS = { Sparkles, Music, Lightbulb, Star }

export default function BottomNav({ active, onChange }) {
  const { language } = useLanguage()

  return (
    <nav
      className="fixed inset-x-0 z-40 px-3 md:hidden"
      style={{ bottom: 'max(0.75rem, var(--safe-bottom))' }}
      aria-label="Main"
    >
      <ul className="grid grid-cols-4 rounded-[1.35rem] bg-ink/95 p-1 text-white shadow-[0_16px_40px_-12px_rgba(28,25,23,0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-ink/90">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon]
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                className={`flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-0.5 py-1.5 text-[10px] font-semibold leading-tight transition active:scale-95 ${
                  isActive ? 'bg-white/15 text-white' : 'text-white/55'
                }`}
              >
                <Icon size={21} strokeWidth={isActive ? 2.2 : 1.7} />
                <span className="max-w-full truncate px-0.5">
                  {language === 'CZ' ? item.labelCZ : item.labelSK}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
