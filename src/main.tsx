import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Providers from './Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
