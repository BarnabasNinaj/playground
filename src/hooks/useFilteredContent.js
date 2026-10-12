import { useMemo } from 'react'

export function useFilteredContent({
  content,
  nav,
  stage,
  search,
  filters,
  favorites,
}) {
  return useMemo(() => {
    const q = search.trim().toLowerCase()

    return content.filter((item) => {
      if (nav === 'favorites') {
        if (!favorites.includes(item.id)) return false
      } else if (nav === 'activities') {
        if (item.type !== 'activity') return false
      } else if (nav === 'songs') {
        if (item.type !== 'song') return false
      } else if (nav === 'tips') {
        if (item.type !== 'tip') return false
      }

      if (stage && !item.stages.includes(stage)) return false

      // Place/quick filters apply to activities & tips only — not songs
      if (filters.length > 0 && item.type !== 'song') {
        const tags = item.tags || []
        if (!filters.every((f) => tags.includes(f))) return false
      }

      if (!q) return true

      const haystack = [
        item.title,
        item.description,
        item.notes,
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
  }, [content, nav, stage, search, filters, favorites])
}
