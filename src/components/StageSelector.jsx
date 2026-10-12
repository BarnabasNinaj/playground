import { ChevronDown } from 'lucide-react'
import { STAGES } from '../data/constants'
import { useLanguage } from '../context/LanguageContext'

export default function StageSelector({ value, onChange, compact = false }) {
  const { language, t } = useLanguage()

  if (compact) {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={t.stage}
          className="appearance-none rounded-2xl bg-surface py-2 pl-3 pr-8 text-xs font-semibold text-ink outline-none ring-1 ring-line/80 focus:ring-2 focus:ring-moss/30"
        >
          <option value="">{t.allStages}</option>
          {STAGES.map((s) => (
            <option key={s.id} value={s.id}>
              {language === 'CZ' ? s.labelCZ : s.labelSK}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted"
        />
      </div>
    )
  }

  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
        {t.stage}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={t.stage}
          className="w-full appearance-none rounded-2xl bg-surface py-2.5 pl-3.5 pr-9 text-sm font-semibold text-ink outline-none ring-1 ring-line/80 transition focus:ring-2 focus:ring-moss/30"
        >
          <option value="">{t.allStages}</option>
          {STAGES.map((s) => (
            <option key={s.id} value={s.id}>
              {language === 'CZ' ? s.labelCZ : s.labelSK}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted"
        />
      </div>
    </label>
  )
}
