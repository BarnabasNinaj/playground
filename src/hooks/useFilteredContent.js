import { useMemo } from 'react'

export function useFilteredContent({
  content,
  nav,
  search,
  filters,
  favorites,
}) {
  return useMemo(() => {
    const q = search.trim().toLowerCase()

    return content.filter((item) => {
      if (nav === 'favorites') {
        if (!Array.isArray(favorites) || !favorites.includes(item.id)) return false
      } else if (nav === 'activities') {
        if (item.type !== 'activity') return false
      } else if (nav === 'songs') {
        if (item.type !== 'song') return false
      } else if (nav === 'tips') {
        if (item.type !== 'tip') return false
      } else if (nav === 'encyclopedia') {
        if (item.type !== 'encyclopedia') return false
      } else if (nav === 'countries') {
        if (item.type !== 'country') return false
      }

      if (
        filters.length > 0 &&
        (nav === 'activities' || nav === 'tips') &&
        (item.type === 'activity' || item.type === 'tip')
      ) {
        const tags = item.tags || []
        if (!filters.every((f) => tags.includes(f))) return false
      }

      if (!q) return true

      const haystack = [
        item.title,
        item.description,
        item.notes,
        item.record,
        item.lyrics,
        item.actions,
        ...(item.materials || []),
        ...(item.steps || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return haystack.includes(q)
    })
  }, [content, nav, search, filters, favorites])
}
