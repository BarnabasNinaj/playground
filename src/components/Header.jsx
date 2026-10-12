import { Search, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import StageSelector from './StageSelector'

export default function Header({
  nav,
  stage,
  onStageChange,
  searchOpen,
  onSearchToggle,
  search,
  onSearchChange,
  searchInputRef,
}) {
  const { language, setLanguage, t } = useLanguage()
  const showStage = nav !== 'songs'

  return (
    <header className="sticky top-0 z-30 border-b border-line/40 bg-surface/80 backdrop-blur-xl pt-[var(--safe-top)] md:bg-transparent md:pt-0 md:backdrop-blur-none">
      <div className="flex items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 md:px-8 md:pt-6 md:pb-2">
        <div className="min-w-0 flex-1 md:hidden">
          <p className="truncate font-display text-[1.35rem] font-semibold leading-none tracking-tight text-moss-deep sm:text-2xl">
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
            enterKeyHint="search"
            autoCapitalize="off"
            autoCorrect="off"
            className="w-full rounded-2xl border-0 bg-canvas/80 py-3 pl-11 pr-12 text-base text-ink outline-none ring-1 ring-line/70 transition placeholder:text-ink-muted focus:bg-surface focus:ring-2 focus:ring-moss/30 md:text-sm"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-ink-muted ring-1 ring-line lg:inline">
            /
          </kbd>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:ml-3">
          <div
            className="inline-flex rounded-2xl bg-canvas/80 p-0.5 ring-1 ring-line/70 sm:p-1"
            role="group"
            aria-label={t.language}
          >
            {['SK', 'CZ', 'EN'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`min-h-9 min-w-9 rounded-xl px-2 text-[11px] font-bold tracking-wide transition sm:min-h-10 sm:min-w-10 sm:px-2.5 sm:text-xs ${
                  language === lang
                    ? 'bg-moss text-white'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {showStage && (
            <div className="max-w-[7.5rem] md:hidden sm:max-w-[9rem]">
              <StageSelector value={stage} onChange={onStageChange} compact />
            </div>
          )}

          <button
            type="button"
            onClick={onSearchToggle}
            aria-label={t.search}
            aria-expanded={searchOpen}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-canvas/80 text-ink ring-1 ring-line/70 transition active:scale-95 hover:ring-moss/40 md:hidden"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`${searchOpen ? 'block' : 'hidden'} border-t border-line/40 px-3 py-3 sm:px-4 md:hidden`}
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
            className="w-full rounded-2xl bg-canvas/80 py-3 pl-10 pr-3 text-base text-ink outline-none ring-1 ring-line/70 focus:ring-2 focus:ring-moss/30"
          />
        </div>
      </div>
    </header>
  )
}
