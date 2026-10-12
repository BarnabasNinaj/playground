import { Home, Trees } from 'lucide-react'
import { ACTIVITY_PLACES } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

const ICONS = {
  all: null,
  indoor: Home,
  outdoors: Trees,
}

export default function PlaceToggle({ value, onChange }) {
  const { language, t } = useLanguage()

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
        {t.place}
      </p>
      <div className="inline-flex rounded-2xl bg-surface p-1 ring-1 ring-line/70">
        {ACTIVITY_PLACES.map((p) => {
          const Icon = ICONS[p.id]
          const active = value === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onChange(p.id)}
              className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                active
                  ? 'bg-moss text-white'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {Icon ? <Icon size={14} strokeWidth={1.75} /> : null}
              {language === 'CZ' ? p.labelCZ : p.labelSK}
            </button>
          )
        })}
      </div>
    </div>
  )
}
