import { useMemo } from 'react'

export function useFilteredContent({
  content,
  nav,
  stage,
  search,
  quickFilters,
  favorites,
  place = 'all',
}) {
  return useMemo(() => {
    const q = search.trim().toLowerCase()

    return content.filter((item) => {
      if (nav === 'favorites') {
        if (!favorites.includes(item.id)) return false
      } else if (nav === 'activities') {
        if (item.type !== 'activity') return false
        if (place === 'outdoors' && !item.tags?.includes('outdoors')) return false
        if (place === 'indoor' && item.tags?.includes('outdoors')) return false
      } else if (nav === 'songs') {
        if (item.type !== 'song') return false
      } else if (nav === 'tips') {
        if (item.type !== 'tip') return false
      }

      if (stage && !item.stages.includes(stage)) return false

      if (quickFilters.length > 0) {
        const hasAll = quickFilters.every((f) => item.tags.includes(f))
        if (!hasAll) return false
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
  }, [content, nav, stage, search, quickFilters, favorites, place])
}
