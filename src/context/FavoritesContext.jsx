import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)
const STORAGE_KEY = 'playground-favorites'

function readFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id) => typeof id === 'string')
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      /* ignore */
    }
  }, [favorites])

  const isFavorite = useCallback(
    (id) => Array.isArray(favorites) && favorites.includes(id),
    [favorites],
  )

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const list = Array.isArray(prev) ? prev : []
      return list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
    })
  }, [])

  const value = useMemo(
    () => ({
      favorites: Array.isArray(favorites) ? favorites : [],
      isFavorite,
      toggleFavorite,
    }),
    [favorites, isFavorite, toggleFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
