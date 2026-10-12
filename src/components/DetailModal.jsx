import { Star, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { CATEGORIES, STAGES } from '../data/constants'

export default function DetailModal({ item, onClose, asPanel = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { language, t } = useLanguage()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item || asPanel) return
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, onClose, asPanel])

  if (!item) {
    if (asPanel) {
      return (
        <div className="flex h-full animate-soft-in flex-col items-center justify-center px-10 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-ink/25">
            {t.appName}
          </p>
          <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-ink-muted">
            {t.selectItem}
          </p>
        </div>
      )
    }
    return null
  }

  const fav = isFavorite(item.id)
  const cat = CATEGORIES.find((c) => c.id === item.category)
  const stageLabels = item.stages
    .map((id) => STAGES.find((s) => s.id === id))
    .filter(Boolean)
    .map((s) => (language === 'CZ' ? s.labelCZ : s.labelSK))
    .join(' · ')

  const body = (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 px-6 pb-2 pt-6 md:px-7">
        <div className="min-w-0">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
            {language === 'CZ' ? cat?.labelCZ : cat?.labelSK}
          </p>
          <h2
            id="detail-title"
            className="font-display text-[1.65rem] font-semibold leading-tight tracking-tight text-ink md:text-[1.85rem]"
          >
            {item.title}
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            {[item.duration, stageLabels].filter(Boolean).join(' · ')}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={fav ? t.removeFavorite : t.addFavorite}
            onClick={() => toggleFavorite(item.id)}
            className={`rounded-full p-2 transition ${
              fav ? 'text-clay' : 'text-ink-muted hover:bg-canvas hover:text-clay'
            }`}
          >
            <Star size={20} fill={fav ? 'currentColor' : 'none'} strokeWidth={1.75} />
          </button>
          {!asPanel && (
            <button
              ref={closeRef}
              type="button"
              aria-label={t.close}
              onClick={onClose}
              className="rounded-full p-2 text-ink-muted transition hover:bg-canvas hover:text-ink"
            >
              <X size={20} strokeWidth={1.75} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 md:px-7">
        <p className="mb-7 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>

        {item.type === 'song' && item.lyrics && (
          <section className="mb-7">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              {t.lyrics}
            </h3>
            <div className="rounded-3xl bg-clay-soft/60 px-5 py-5">
              <pre className="lyric-line whitespace-pre-wrap font-display text-[1.2rem] font-medium text-ink">
                {item.lyrics}
              </pre>
            </div>
            {item.actions && (
              <p className="lyric-action mt-3 text-sm">
                <span className="font-bold not-italic text-ink-soft">{t.actions}: </span>
                {item.actions}
              </p>
            )}
          </section>
        )}

        {item.materials?.length > 0 && (
          <section className="mb-7">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              {t.materials}
            </h3>
            <ul className="space-y-2">
              {item.materials.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                  {m}
                </li>
              ))}
            </ul>
          </section>
        )}

        {item.steps?.length > 0 && (
          <section className="mb-7">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
              {t.steps}
            </h3>
            <ol className="space-y-4">
              {item.steps.map((step, i) => (
                <li key={i} className="flex gap-3.5 text-sm leading-relaxed text-ink-soft">
                  <span className="font-display text-lg font-semibold leading-none text-moss">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {item.notes && (
          <section className="border-t border-line/70 pt-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
              {t.notes}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{item.notes}</p>
          </section>
        )}
      </div>
    </div>
  )

  if (asPanel) {
    return (
      <div className="h-full overflow-hidden bg-surface/90 animate-soft-in">{body}</div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/35 p-0 backdrop-blur-[3px] md:items-center md:p-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        className="animate-fade-up max-h-[92vh] w-full max-w-lg overflow-hidden rounded-t-[1.75rem] bg-surface shadow-[0_24px_80px_-20px_rgba(28,25,23,0.45)] md:rounded-[1.75rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {body}
      </div>
    </div>
  )
}
