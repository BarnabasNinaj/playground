import { Dices } from 'lucide-react'
import { FILTERS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

export default function FilterChips({ filters, onToggleFilter, onQuickPick, nav }) {
  const { language, t } = useLanguage()

  // Place filters aren't useful for songs — keep the bar light
  if (nav === 'songs') return null

  return (
    <div className="flex items-center gap-2 overflow-x-auto overscroll-x-contain px-3 py-2.5 sm:px-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={onQuickPick}
        className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-2xl bg-moss-deep px-3.5 text-xs font-bold text-white active:scale-95"
      >
        <Dices size={14} strokeWidth={1.75} />
        {t.quickPick}
      </button>

      {FILTERS.map((f) => {
        const active = filters.includes(f.id)
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onToggleFilter(f.id)}
            className={`h-10 shrink-0 rounded-2xl px-3.5 text-xs font-semibold transition active:scale-95 ${
              active
                ? 'bg-moss text-white'
                : 'bg-surface text-ink-soft ring-1 ring-line/70'
            }`}
          >
            {language === 'CZ' ? f.labelCZ : f.labelSK}
          </button>
        )
      })}
    </div>
  )
}
