import { Search, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Header({
  searchOpen,
  onSearchToggle,
  search,
  onSearchChange,
  searchInputRef,
}) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-line/40 bg-surface/90 backdrop-blur-xl pt-[var(--safe-top)] md:bg-transparent md:pt-0 md:backdrop-blur-none">
      {/* Mobile: brand + language + search */}
      <div className="flex items-center gap-3 px-4 py-3 md:hidden">
        <div className="min-w-0 flex-1">
          <p className="font-display text-2xl font-semibold leading-none tracking-tight text-moss-deep">
            {t.appName}
          </p>
        </div>

        <div
          className="inline-flex shrink-0 rounded-2xl bg-canvas/90 p-1 ring-1 ring-line/70"
          role="group"
          aria-label={t.language}
        >
          {['SK', 'CZ'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`h-9 min-w-9 rounded-xl px-2.5 text-xs font-bold tracking-wide transition ${
                language === lang
                  ? 'bg-moss text-white'
                  : 'text-ink-muted'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onSearchToggle}
          aria-label={t.search}
          aria-expanded={searchOpen}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-canvas/90 text-ink ring-1 ring-line/70 transition active:scale-95"
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
        </button>
      </div>

      {/* Mobile: search panel */}
      <div
        className={`${searchOpen ? 'block' : 'hidden'} border-t border-line/40 px-4 py-3 md:hidden`}
      >
        <div className="relative">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            enterKeyHint="search"
            autoCapitalize="off"
            autoCorrect="off"
            className="w-full rounded-2xl bg-canvas/90 py-3 pl-10 pr-3 text-base text-ink outline-none ring-1 ring-line/70 focus:ring-2 focus:ring-moss/30"
          />
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden items-center gap-3 px-8 pt-6 pb-2 md:flex">
        <div className="relative min-w-0 flex-1">
          <Search
            size={17}
            strokeWidth={1.75}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            ref={searchInputRef}
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            enterKeyHint="search"
            autoCapitalize="off"
            autoCorrect="off"
            className="w-full rounded-2xl border-0 bg-canvas/80 py-3 pl-11 pr-12 text-sm text-ink outline-none ring-1 ring-line/70 transition placeholder:text-ink-muted focus:bg-surface focus:ring-2 focus:ring-moss/30"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-ink-muted ring-1 ring-line lg:inline">
            /
          </kbd>
        </div>

        <div
          className="inline-flex shrink-0 rounded-2xl bg-canvas/80 p-1 ring-1 ring-line/70"
          role="group"
          aria-label={t.language}
        >
          {['SK', 'CZ'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`min-h-10 min-w-10 rounded-xl px-3 text-xs font-bold tracking-wide transition ${
                language === lang
                  ? 'bg-moss text-white'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
