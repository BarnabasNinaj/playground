import { BookOpen, Check, Lightbulb, Music, Sparkles, Star } from 'lucide-react'
import { FILTERS, NAV_ITEMS } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

const ICONS = { Sparkles, Music, Lightbulb, BookOpen, Star }

export default function Sidebar({
  nav,
  onNavChange,
  filters,
  onToggleFilter,
}) {
  const { language, t } = useLanguage()

  return (
    <aside className="relative z-10 hidden h-full w-[248px] shrink-0 flex-col px-5 py-6 lg:w-[268px] md:flex">
      <div className="mb-8">
        <h1 className="font-display text-[2rem] font-semibold leading-none tracking-tight text-moss-deep">
          {t.appName}
        </h1>
        <p className="mt-2 text-sm leading-snug text-ink-muted">{t.tagline}</p>
      </div>

      <nav className="mb-8 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon]
          const isActive = nav === item.id
          if (!Icon) return null
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavChange(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? 'bg-moss text-white'
                  : 'text-ink-soft hover:bg-surface hover:text-ink'
              }`}
            >
              <Icon size={18} strokeWidth={1.75} />
              {language === 'CZ' ? item.labelCZ : item.labelSK}
            </button>
          )
        })}
      </nav>

      {(nav === 'activities' || nav === 'tips') && (
        <div className="mb-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
            {t.filters}
          </p>
          <div className="flex flex-col gap-1">
            {FILTERS.map((f) => {
              const active = filters.includes(f.id)
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => onToggleFilter(f.id)}
                  className={`flex min-h-10 items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm transition ${
                    active
                      ? 'bg-clay-soft font-semibold text-ink'
                      : 'text-ink-soft hover:bg-surface'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] ${
                      active
                        ? 'bg-clay text-white'
                        : 'bg-surface ring-1 ring-line'
                    }`}
                  >
                    {active ? <Check size={11} strokeWidth={3} /> : null}
                  </span>
                  {language === 'CZ' ? f.labelCZ : f.labelSK}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  )
}
