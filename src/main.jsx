import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Register PWA after paint so a SW failure never blanks the app.
// Also drop a one-time legacy SW (old public/sw.js) that can serve stale HTML/JS.
queueMicrotask(() => {
  const MIGRATE_KEY = 'playground-sw-v2'
  const migrate = async () => {
    try {
      if ('serviceWorker' in navigator && !localStorage.getItem(MIGRATE_KEY)) {
        const regs = await navigator.serviceWorker.getRegistrations()
        await Promise.all(regs.map((r) => r.unregister()))
        if ('caches' in window) {
          const keys = await caches.keys()
          await Promise.all(keys.map((k) => caches.delete(k)))
        }
        localStorage.setItem(MIGRATE_KEY, '1')
      }
    } catch {
      /* ignore */
    }
    try {
      registerSW({ immediate: true })
    } catch {
      /* ignore */
    }
  }
  migrate()
})
