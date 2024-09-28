import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import GlobalContextProvider from './context/GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </GlobalContextProvider>
  </StrictMode>,
)
