import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import FilterChips from './components/FilterChips'
import ContentCard from './components/ContentCard'
import DetailModal from './components/DetailModal'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { FavoritesProvider, useFavorites } from './context/FavoritesContext'
import { useFilteredContent } from './hooks/useFilteredContent'
import { useMediaQuery } from './hooks/useMediaQuery'
import { NAV_ITEMS } from './data/constants'

function AppShell() {
  const { content, t, language } = useLanguage()
  const { favorites } = useFavorites()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [nav, setNav] = useState('activities')
  const [stage, setStage] = useState('')
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [filters, setFilters] = useState([])
  const [selected, setSelected] = useState(null)
  const searchInputRef = useRef(null)

  const filtered = useFilteredContent({
    content,
    nav,
    stage,
    search,
    filters,
    favorites,
  })

  const navLabel =
    NAV_ITEMS.find((n) => n.id === nav)?.[language === 'CZ' ? 'labelCZ' : 'labelSK'] ||
    ''

  const toggleFilter = useCallback((id) => {
    setFilters((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }, [])

  const handleSelect = useCallback((item) => {
    setSelected(item)
  }, [])

  const handleClose = useCallback(() => {
    setSelected(null)
  }, [])

  const handleQuickPick = useCallback(() => {
    const pool = content.filter((item) => {
      if (item.type !== 'activity') return false
      if (stage && !item.stages.includes(stage)) return false
      if (filters.length > 0) {
        const tags = item.tags || []
        if (!filters.every((f) => tags.includes(f))) return false
      }
      return true
    })
    if (pool.length === 0) return
    const pick = pool[Math.floor(Math.random() * pool.length)]
    setNav('activities')
    setSelected(pick)
  }, [content, stage, filters])

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName
      const typing =
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        e.target?.isContentEditable

      if (e.key === '/' && !typing) {
        e.preventDefault()
        setSearchOpen(true)
        requestAnimationFrame(() => searchInputRef.current?.focus())
      }
      if (e.key === 'Escape') {
        if (selected) handleClose()
        else if (document.activeElement === searchInputRef.current) {
          searchInputRef.current?.blur()
          setSearchOpen(false)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, handleClose])

  useEffect(() => {
    setSelected(null)
  }, [nav, stage, search, filters])

  return (
    <div className="app-shell relative flex min-h-0 flex-col md:flex-row">
      <div className="noise-overlay" aria-hidden />

      <Sidebar
        nav={nav}
        onNavChange={setNav}
        stage={stage}
        onStageChange={setStage}
        filters={filters}
        onToggleFilter={toggleFilter}
        onQuickPick={handleQuickPick}
      />

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col md:pr-3 md:py-3">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:rounded-[1.75rem] md:bg-surface/55 md:ring-1 md:ring-line/60 md:backdrop-blur-sm">
          <Header
            nav={nav}
            stage={stage}
            onStageChange={setStage}
            searchOpen={searchOpen}
            onSearchToggle={() => setSearchOpen((v) => !v)}
            search={search}
            onSearchChange={setSearch}
            searchInputRef={searchInputRef}
          />

          <FilterChips
            nav={nav}
            filters={filters}
            onToggleFilter={toggleFilter}
            onQuickPick={handleQuickPick}
          />

          <div className="flex min-h-0 flex-1">
            <main
              className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 pt-2 sm:px-4 md:px-8 md:pb-8 md:pt-4"
              style={{
                paddingBottom: isDesktop
                  ? undefined
                  : 'var(--bottom-nav-space)',
              }}
            >
              <div className="mb-4 md:mb-5">
                <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-[2.15rem]">
                  {navLabel}
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  {filtered.length} {t.results}
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="flex h-52 items-center justify-center rounded-3xl bg-surface/70 px-6 text-center text-sm text-ink-muted ring-1 ring-line/50">
                  {nav === 'favorites' ? t.favoritesEmpty : t.noResults}
                </div>
              ) : (
                <div
                  className={`grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 ${
                    selected && isDesktop ? 'xl:grid-cols-2' : 'xl:grid-cols-3'
                  }`}
                >
                  {filtered.map((item) => (
                    <ContentCard
                      key={item.id}
                      item={item}
                      selected={selected?.id === item.id}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              )}
            </main>

            {isDesktop && (
              <aside className="hidden w-[min(100%,400px)] shrink-0 overflow-hidden border-l border-line/50 xl:block 2xl:w-[440px]">
                <DetailModal item={selected} onClose={handleClose} asPanel />
              </aside>
            )}
          </div>
        </div>
      </div>

      <BottomNav active={nav} onChange={setNav} />

      {selected && (
        <div className="xl:hidden">
          <DetailModal item={selected} onClose={handleClose} />
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <AppShell />
      </FavoritesProvider>
    </LanguageProvider>
  )
}
