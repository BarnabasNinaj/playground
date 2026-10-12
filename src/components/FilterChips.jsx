import { Dices, Home, Trees } from 'lucide-react'
import { ACTIVITY_PLACES, QUICK_FILTERS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

export default function FilterChips({
  quickFilters,
  onToggleFilter,
  onQuickPick,
  nav,
  place,
  onPlaceChange,
}) {
  const { language, t } = useLanguage()

  return (
    <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={onQuickPick}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl bg-moss-deep px-3.5 py-2 text-xs font-bold text-white"
      >
        <Dices size={14} strokeWidth={1.75} />
        {t.quickPick}
      </button>

      {nav === 'activities' &&
        ACTIVITY_PLACES.filter((p) => p.id !== 'all').map((p) => {
          const active = place === p.id
          const Icon = p.id === 'indoor' ? Home : Trees
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onPlaceChange(active ? 'all' : p.id)}
              className={`inline-flex shrink-0 items-center gap-1 rounded-2xl px-3.5 py-2 text-xs font-semibold transition ${
                active
                  ? 'bg-moss text-white'
                  : 'bg-surface text-ink-soft ring-1 ring-line/70'
              }`}
            >
              <Icon size={13} strokeWidth={1.75} />
              {language === 'CZ' ? p.labelCZ : p.labelSK}
            </button>
          )
        })}

      {QUICK_FILTERS.map((f) => {
        const active = quickFilters.includes(f.id)
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onToggleFilter(f.id)}
            className={`shrink-0 rounded-2xl px-3.5 py-2 text-xs font-semibold transition ${
              active
                ? 'bg-clay-soft text-ink ring-1 ring-clay/30'
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
