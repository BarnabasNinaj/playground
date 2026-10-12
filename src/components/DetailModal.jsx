import { Star, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { CATEGORIES } from '../data/constants'

export default function DetailModal({ item, onClose, asPanel = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { language, t } = useLanguage()
  const closeRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!item || asPanel) return
    closeRef.current?.focus()
    scrollRef.current?.scrollTo?.(0, 0)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
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

  const body = (
    <>
      {!asPanel && (
        <div className="flex justify-center pt-2 md:hidden" aria-hidden>
          <span className="h-1 w-10 rounded-full bg-line" />
        </div>
      )}

      <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-surface/95 px-4 pb-3 pt-4 backdrop-blur-md sm:px-6 md:static md:bg-transparent md:px-7 md:pb-2 md:pt-6 md:backdrop-blur-none">
        <div className="min-w-0">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
            {language === 'CZ' ? cat?.labelCZ : cat?.labelSK}
          </p>
          <h2
            id="detail-title"
            className="font-display text-[1.45rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.65rem] md:text-[1.85rem]"
          >
            {item.title}
          </h2>
          {item.type !== 'song' && item.duration && (
            <p className="mt-2 text-sm text-ink-muted">{item.duration}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            aria-label={fav ? t.removeFavorite : t.addFavorite}
            onClick={() => toggleFavorite(item.id)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition active:scale-95 ${
              fav ? 'text-clay' : 'text-ink-muted hover:bg-canvas hover:text-clay'
            }`}
          >
            <Star size={22} fill={fav ? 'currentColor' : 'none'} strokeWidth={1.75} />
          </button>
          {!asPanel && (
            <button
              ref={closeRef}
              type="button"
              aria-label={t.close}
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition active:scale-95 hover:bg-canvas hover:text-ink"
            >
              <X size={22} strokeWidth={1.75} />
            </button>
          )}
        </div>
      </div>

      <div className="px-4 pb-6 pt-1 sm:px-6 md:px-7 md:pb-7 md:pt-2">
        {item.type !== 'song' && (
          <p className="mb-6 text-[15px] leading-relaxed text-ink-soft sm:mb-7">
            {item.description}
          </p>
        )}

        {item.type === 'song' && item.lyrics && (
          <section className="mb-2">
            <div className="rounded-3xl bg-clay-soft/50 px-4 py-5 sm:px-6 sm:py-6">
              <pre className="lyric-line m-0 whitespace-pre-wrap">{item.lyrics}</pre>
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
              {item.type === 'encyclopedia' ? t.about : t.materials}
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
              {item.type === 'encyclopedia' ? t.facts : t.steps}
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

        {item.type === 'encyclopedia' && item.record && (
          <section className="mb-7 rounded-3xl bg-moss-soft/60 px-4 py-4 sm:px-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
              {t.record}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{item.record}</p>
          </section>
        )}

        {item.notes && item.type !== 'song' && (
          <section className="border-t border-line/70 pt-5">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
              {t.notes}
            </h3>
            <p className="break-words text-sm leading-relaxed text-ink-soft">{item.notes}</p>
          </section>
        )}
      </div>
    </>
  )

  if (asPanel) {
    return (
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto overscroll-contain bg-surface/90 animate-soft-in"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {body}
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 backdrop-blur-[3px] md:items-center md:p-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={scrollRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        className="animate-sheet-up w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-[1.75rem] bg-surface shadow-[0_24px_80px_-20px_rgba(28,25,23,0.45)] md:animate-fade-up md:rounded-[1.75rem]"
        style={{
          maxHeight: 'min(92dvh, calc(var(--app-height) - 0.5rem))',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 'max(0.75rem, var(--safe-bottom))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {body}
      </div>
    </div>
  )
}
