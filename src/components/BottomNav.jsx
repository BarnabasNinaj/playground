import { Lightbulb, Music, Sparkles, Star } from 'lucide-react'
import { NAV_ITEMS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

const ICONS = { Sparkles, Music, Lightbulb, Star }

export default function BottomNav({ active, onChange }) {
  const { language } = useLanguage()

  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 md:hidden pb-[env(safe-area-inset-bottom)]">
      <ul className="grid grid-cols-4 rounded-[1.35rem] bg-ink/95 p-1.5 text-white shadow-[0_16px_40px_-12px_rgba(28,25,23,0.55)] backdrop-blur-xl">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon]
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                className={`flex w-full flex-col items-center gap-0.5 rounded-2xl px-1 py-2 text-[10px] font-semibold transition ${
                  isActive ? 'bg-white/15 text-white' : 'text-white/55'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.7} />
                {language === 'CZ' ? item.labelCZ : item.labelSK}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
