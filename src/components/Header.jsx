import { Search, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import StageSelector from './StageSelector'

export default function Header({
  stage,
  onStageChange,
  searchOpen,
  onSearchToggle,
  search,
  onSearchChange,
  searchInputRef,
}) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-line/40 bg-surface/75 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none">
      <div className="flex items-center gap-3 px-4 py-3 md:px-8 md:pt-6 md:pb-2">
        <div className="min-w-0 md:hidden">
          <p className="truncate font-display text-2xl font-semibold tracking-tight text-moss-deep">
            {t.appName}
          </p>
        </div>

        <div className="relative hidden min-w-0 flex-1 md:block">
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
            className="w-full rounded-2xl border-0 bg-canvas/80 py-3 pl-11 pr-12 text-sm text-ink outline-none ring-1 ring-line/70 transition placeholder:text-ink-muted focus:bg-surface focus:ring-2 focus:ring-moss/30"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-ink-muted ring-1 ring-line lg:inline">
            /
          </kbd>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-3">
          <div
            className="inline-flex rounded-2xl bg-canvas/80 p-1 ring-1 ring-line/70"
            role="group"
            aria-label={t.language}
          >
            {['SK', 'CZ'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold tracking-wide transition ${
                  language === lang
                    ? 'bg-moss text-white'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <StageSelector value={stage} onChange={onStageChange} compact />
          </div>

          <button
            type="button"
            onClick={onSearchToggle}
            aria-label={t.search}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-canvas/80 text-ink ring-1 ring-line/70 transition hover:ring-moss/40 md:hidden"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
        </div>
      </div>

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
            className="w-full rounded-2xl bg-canvas/80 py-3 pl-10 pr-3 text-sm text-ink outline-none ring-1 ring-line/70 focus:ring-2 focus:ring-moss/30"
          />
        </div>
      </div>
    </header>
  )
}
