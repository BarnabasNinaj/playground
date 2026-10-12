import { FILTERS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

export default function FilterChips({ filters, onToggleFilter, nav }) {
  const { language, t } = useLanguage()

  // Place filters only for activities & tips
  if (nav !== 'activities' && nav !== 'tips') return null

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between px-4 pb-1.5 pt-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
          {t.filters}
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => {
          const active = filters.includes(f.id)
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onToggleFilter(f.id)}
              className={`h-10 shrink-0 rounded-2xl px-4 text-xs font-semibold transition active:scale-95 ${
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
    </div>
  )
}
