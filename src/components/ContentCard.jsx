import { Star } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { CATEGORIES, STAGES } from '../data/constants'

const accentByType = {
  activity: 'bg-moss',
  song: 'bg-clay',
  tip: 'bg-ink-soft',
}

function accentFor(item) {
  if (item.type === 'song') return accentByType.song
  if (item.tags?.includes('car')) return 'bg-ink-soft'
  if (item.tags?.includes('outdoors')) return 'bg-clay'
  return accentByType[item.type] || 'bg-moss'
}

export default function ContentCard({ item, selected, onSelect }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { language, t } = useLanguage()
  const fav = isFavorite(item.id)
  const cat = CATEGORIES.find((c) => c.id === item.category)
  const stageLabels = item.stages
    .map((id) => STAGES.find((s) => s.id === id))
    .filter(Boolean)
    .map((s) => (language === 'CZ' ? s.labelCZ : s.labelSK))
    .slice(0, 2)
    .join(' · ')

  const placeLabel = item.tags?.includes('car')
    ? t.car
    : item.tags?.includes('outdoors')
      ? t.outdoors
      : item.type === 'activity' || item.tags?.includes('indoor')
        ? t.indoor
        : null

  const songLangLabel =
    item.lang === 'EN' ? 'EN' : item.lang === 'CZ' ? 'CZ' : item.lang === 'SK' ? 'SK' : null

  const meta =
    item.type === 'song'
      ? [language === 'CZ' ? 'Písnička' : 'Pesnička', songLangLabel]
          .filter(Boolean)
          .join(' · ')
      : item.type === 'tip'
        ? ['Montessori', placeLabel].filter(Boolean).join(' · ')
        : [language === 'CZ' ? cat?.labelCZ : cat?.labelSK, placeLabel]
            .filter(Boolean)
            .join(' · ')

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(item)
        }
      }}
      className={`group relative animate-fade-up cursor-pointer overflow-hidden rounded-3xl bg-surface p-4 text-left transition duration-300 active:scale-[0.99] sm:p-5 ${
        selected
          ? 'ring-2 ring-moss/40 shadow-[0_12px_40px_-16px_rgba(31,63,54,0.35)]'
          : 'ring-1 ring-line/70 hover:ring-moss/25 md:hover:-translate-y-0.5 md:hover:shadow-[0_16px_40px_-20px_rgba(28,25,23,0.25)]'
      }`}
    >
      <span
        className={`absolute inset-y-4 left-0 w-1 rounded-r-full ${accentFor(item)} opacity-80 transition group-hover:opacity-100`}
      />

      <div className="mb-4 flex items-start justify-between gap-3 pl-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
          {meta}
        </span>
        <button
          type="button"
          aria-label={fav ? t.removeFavorite : t.addFavorite}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(item.id)
          }}
          className={`-mr-1 -mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full transition active:scale-95 ${
            fav
              ? 'text-clay'
              : 'text-line hover:bg-canvas hover:text-clay'
          }`}
        >
          <Star size={18} fill={fav ? 'currentColor' : 'none'} strokeWidth={1.75} />
        </button>
      </div>

      <h3 className="mb-2 pl-2 font-display text-[1.15rem] font-semibold leading-snug tracking-tight text-ink">
        {item.title}
      </h3>
      <p
        className={`line-clamp-2 pl-2 text-sm leading-relaxed text-ink-soft ${
          item.type === 'song' ? '' : 'mb-4'
        }`}
      >
        {item.description}
      </p>

      {item.type !== 'song' && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pl-2 text-xs text-ink-muted">
          {item.duration && <span>{item.duration}</span>}
          {item.duration && stageLabels && (
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden />
          )}
          {stageLabels && <span>{stageLabels}</span>}
        </div>
      )}
    </article>
  )
}
